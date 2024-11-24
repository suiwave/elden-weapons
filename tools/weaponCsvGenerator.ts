import axios from 'axios';
import * as cheerio from 'cheerio';
import Papa from 'papaparse';
import { writeFile } from './writeFile';

// WikiページのURL（例）
const WIKI_BASE_URL = 'https://kamikouryaku.net/eldenring';

const WIKI_WEAPON_URLs = [
    // 近接武器
    "/?%E7%9F%AD%E5%89%A3",
    "/?%E6%8A%95%E6%93%B2%E5%89%A3",
    "/?%E7%9B%B4%E5%89%A3",
    "/?%E8%BB%BD%E5%A4%A7%E5%89%A3",
    "/?%E5%A4%A7%E5%89%A3",
    "/?%E7%89%B9%E5%A4%A7%E5%89%A3",
    "/?%E5%88%BA%E5%89%A3",
    "/?%E9%87%8D%E5%88%BA%E5%89%A3",
    "/?%E6%9B%B2%E5%89%A3",
    "/?%E5%A4%A7%E6%9B%B2%E5%89%A3",
    "/?%E9%80%86%E6%89%8B%E5%89%A3%28%E6%AD%A6%E5%99%A8%E7%A8%AE%29",
    "/?%E5%88%80",
    "/?%E5%A4%A7%E5%88%80",
    "/?%E4%B8%A1%E5%88%83%E5%89%A3",
    "/?%E6%96%A7",
    "/?%E5%A4%A7%E6%96%A7",
    "/?%E6%A7%8C",
    "/?%E3%83%95%E3%83%AC%E3%82%A4%E3%83%AB",
    "/?%E5%A4%A7%E6%A7%8C",
    "/?%E7%89%B9%E5%A4%A7%E6%AD%A6%E5%99%A8",
    "/?%E6%A7%8D",
    "/?%E5%A4%A7%E6%A7%8D",
    "/?%E6%96%A7%E6%A7%8D",
    "/?%E9%8E%8C",
    "/?%E9%9E%AD",
    "/?%E6%8B%B3",
    "/?%E6%A0%BC%E9%97%98",
    "/?%E7%88%AA",
    "/?%E7%8D%A3%E7%88%AA%28%E6%AD%A6%E5%99%A8%E7%A8%AE%29",
    "/?%E8%AA%BF%E9%A6%99%E7%93%B6%28%E6%AD%A6%E5%99%A8%E7%A8%AE%29",
    // 遠距離武器
    "/?%E5%B0%8F%E5%BC%93",
    "/?%E9%95%B7%E5%BC%93",
    "/?%E5%A4%A7%E5%BC%93",
    "/?%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%9C%E3%82%A6",
    "/?%E3%83%90%E3%83%AA%E3%82%B9%E3%82%BF",
    // 矢・ボルトはスキップする
    // "/?%E7%9F%A2%E3%83%BB%E3%83%9C%E3%83%AB%E3%83%88",
    "/?%E6%9D%96",
    "/?%E8%81%96%E5%8D%B0",
    // 盾
    "/?%E6%9D%BE%E6%98%8E",
    "/?%E5%B0%8F%E7%9B%BE",
    "/?%E4%B8%AD%E7%9B%BE",
    "/?%E5%A4%A7%E7%9B%BE",
    "/?%E5%88%BA%E7%AA%81%E7%9B%BE",
]
// パースして作成するWeaponオブジェクト
interface Weapon {
    name: string;
    weapon_url: string;
    arts: string;
    arts_url: string;
    getMethod: string;
    effect: string;
    str_required: string;
    dex_required: string;
    int_required: string;
    fth_required: string;
    myt_required: string;
    upgrade_path: string;
    enable_change_arts: string;
}

const fetchWeaponData = async (url: string): Promise<Weapon[]> => {
    const weaponArray: Weapon[] = []

    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    $('#body > h3').each((_, h3) => {
        const weaponNameElm = $(h3);

        // `<h3>`の次にある2つの要素を取得
        // <h3 />
        // <p /> このpがある場合とない場合がある
        // <div />
        const nextElm = $(h3).next();
        const nextNextElm = $(nextElm).next();

        let elwElm: cheerio.Cheerio | null = null;
        if (nextElm.is('.elw')) {
            elwElm = nextElm;
        } else if (nextNextElm.is('.elw')) {
            elwElm = nextNextElm;
        }

        // 一部ページは '#body > h3' で武器以外がヒットする場合があるのでスキップする
        if (elwElm === null) return

        weaponArray.push(convertObject(weaponNameElm, elwElm))
    })

    return weaponArray
}

const convertObject = (weaponNameElm: cheerio.Cheerio, elwElm: cheerio.Cheerio): Weapon => {
    const name = weaponNameElm.find('.link_page_passage').text()
    const weapon_url = weaponNameElm.find('.link_page_passage').attr("href") ?? "not found weapon_url";

    const elwTable = elwElm.children()
    /**
     * こんな感じのdivが4つ並んでいるので、4つを取得する
    攻撃力/カット率
    ---------------------------------------------------------
    | 物 | 魔 | 炎 | 雷 | 聖 | 致/ガ | 補/射 | 強化 |
    ---------------------------------------------------------
    | 81  | 0  | 0  | 0  | 0  | 110   | -    | 通常 |
    | 36.0 | 21.0 | 21.0 | 21.0 | 21.0 | 15-18 | -    | - |
    ---------------------------------------------------------

    能力補正/必要能力
    ---------------------------------------------------------
    | 筋 | 技 | 知 | 信 | 神 | 属性  | 戦技/消費FP/戦灰 | 重量 |
    ---------------------------------------------------------
    | C  | E  | -  | -  | -  | 斬撃・刺突 | クイックステップ | 2.0 |
    | 9  | 12 | 0  | 0  | 0  | 3(- /- )   | ◯  |
    ---------------------------------------------------------

    入手方法
    ---------------------------------------------------------
    亜人の親分がドロップ
    ---------------------------------------------------------

    付帯効果
    ---------------------------------------------------------
    出血の状態異常を蓄積する(38)
    ---------------------------------------------------------
     */
    // 攻撃力/カット率/致命倍率/ガード強度/強化方法
    const atackTable = elwTable.children('div').eq(0)

    // 能力補正/必要能力/属性/戦技/消費FP/戦灰/重量
    const specTable = elwTable.children('div').eq(1)

    // 入手方法
    const getMethodTable = elwTable.children('div').eq(2)

    // 付帯効果
    const effectTable = elwTable.children('div').eq(3)

    const upgrade_path = atackTable.find('.ie5 table tbody tr:first-child td:last-child').text();
    const artsElement = specTable.find('.ie5 table tbody tr:first-child td:nth-child(7)');
    const arts = artsElement.text();
    const arts_url = artsElement.find("a").attr("href") ?? "not found art_url";
    const str_required = specTable.find('.ie5 table tbody tr:last-child td:nth-child(1)').text();
    const dex_required = specTable.find('.ie5 table tbody tr:last-child td:nth-child(2)').text();
    const int_required = specTable.find('.ie5 table tbody tr:last-child td:nth-child(3)').text();
    const fth_required = specTable.find('.ie5 table tbody tr:last-child td:nth-child(4)').text();
    const myt_required = specTable.find('.ie5 table tbody tr:last-child td:nth-child(5)').text();
    const enable_change_arts = specTable.find('.ie5 table tbody tr:last-child td:last-child').text();
    const getMethod = getMethodTable.find('td').text().replace('入手方法', '')
    const effect = effectTable.find('td').text().replace('付帯効果', '')

    return {
        name,
        weapon_url,
        arts,
        arts_url,
        getMethod,
        effect,
        str_required,
        dex_required,
        int_required,
        fth_required,
        myt_required,
        upgrade_path,
        enable_change_arts,
    }
}

const main = async () => {
    const allWeapons: Weapon[] = []
    for (const url of WIKI_WEAPON_URLs) {
        const pageWeapons = await fetchWeaponData(`${WIKI_BASE_URL}${url}`);
        allWeapons.push(...pageWeapons);
    }

    const csv = Papa.unparse(allWeapons);
    writeFile("./result/weapons.csv", csv)
}

main()

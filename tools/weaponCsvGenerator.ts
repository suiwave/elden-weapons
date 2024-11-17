import axios from 'axios';
import * as cheerio from 'cheerio';
// import * as fs from 'fs';
// import * as path from 'path';

// WikiページのURL（例）
const WIKI_URL = 'https://kamikouryaku.net/eldenring/?%E7%9F%AD%E5%89%A3';

// パースして作成するWeaponオブジェクト
interface Weapon {
    name: string;
    upgrade_path: string;
    arts: string;
    getMethod: string;
    effect: string;
}

const fetchWeaponData = async (url: string) => {
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

        let elwElm;
        if (nextElm.is('.elw')) {
            elwElm = nextElm;
        } else if (nextNextElm.is('.elw')) {
            elwElm = nextNextElm;
        }

        weaponArray.push(convertObject(weaponNameElm, elwElm))
    })

    console.log(weaponArray)
}

const convertObject = (weaponNameElm: cheerio.Cheerio, elwElm: cheerio.Cheerio): Weapon => {
    const name = weaponNameElm.find('.link_page_passage').text()

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
    const arts = specTable.find('.ie5 table tbody tr:first-child td a.link_page_passage').text();
    const getMethod = getMethodTable.find('td').text().replace('入手方法', '')
    const effect = effectTable.find('td').text().replace('付帯効果', '')
    // TODO：その他項目も取得する
    return {
        name,
        upgrade_path,
        arts,
        getMethod,
        effect,
    }
}

const main = async () => {
    fetchWeaponData(WIKI_URL)
}

main()

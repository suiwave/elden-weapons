import axios from 'axios';
import * as cheerio from 'cheerio';
// import * as fs from 'fs';
// import * as path from 'path';

// WikiページのURL（例）
const WIKI_URL = 'https://kamikouryaku.net/eldenring/?%E7%9F%AD%E5%89%A3';

// パースして作成するWeaponオブジェクト
interface Weapon {
    name: string;
    arts: string;
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
    const arts = elwElm
        .find('.flexbox > div:nth-child(2) .ie5 table tbody tr:first-child td a.link_page_passage')
        .text();
    return {
        name,
        arts,
    }
}

const main = async () => {
    fetchWeaponData(WIKI_URL)
}

main()

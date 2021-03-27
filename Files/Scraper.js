// class Scrapper {
//     constructor(url) {
//         this.puppeteer = require('puppeteer');
//         this.browser = await puppeteer.launch();
//         this.page = await puppeteer.BrowserFetcher.newPage();

//         page.goTo(url);
//     }

//     getImage(path) {
//         cosnt [el] = page.$x(path);
//         const src = await el.getProperty('src');
//         const srcTxt = await src.jsonValue();

//         return srcTxt;
//     }
    
//     getText(path){
//         const [el] = page.$x(path);
//         const txt = await el.getProperty('textContent');
//         const rawTxt = await txt.jsonValue();

//         return rawTxt;
//     }
// }
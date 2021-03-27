const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await puppeteer.BrowserFetcher.newPage();
    page.goTo(url);

    cosnt [el1] = page.$x('//*[@id="main-image-container"]/ul/li[5]/span/span/div/img"]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();
    
    cosnt [el2] = page.$x('//*[@id="productTitle"]');
    const txt = await el.getProperty('textContent');
    const rawTxt = await src.jsonValue();

    console.log({srcText, rawTxt})

    browser.close();
}

scrapeProduct("https://www.amazon.com/dp/B07CXG6C9W/ref=ods_gw_eg_d_msevg_erd?pf_rd_r=6PYSS21JZARTBTY350F8&pf_rd_p=d14845e5-3afb-48db-bd58-dd4f69be635f&pd_rd_r=75c94f06-b3bb-43ab-8019-711cb12de803&pd_rd_w=tnUi6&pd_rd_wg=wJyHI&ref_=pd_gw_unk");
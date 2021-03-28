// class Scrapper {
//     constructor(url) {
//         this.puppeteer = require('puppeteer');
//     }

//     async componentDidMount(){
//         this.browser = await puppeteer.launch();
//         this.page = await puppeteer.BrowserFetcher.newPage();

//         page.goTo(url);
//     }

//     async getImage(path) {
//         cosnt [el] = page.$x(path);
//         const src = await el.getProperty('src');
//         const srcTxt = await src.jsonValue();

//         return srcTxt;
//     }
    
//     async getText(path){
//         const [el] = page.$x(path);
//         const txt = await el.getProperty('textContent');
//         const rawTxt = await txt.jsonValue();

//         return rawTxt;
//     }
// }

export default async function loadGraphicCards(page = 1) {
    const searchUrl = `https://www.amazon.de/s/?page=${page}&keywords=graphic+card`;
    const response = await fetch(searchUrl);      // fetch page 
  
    const htmlString = await response.text();     // get response text
    const $ = cheerio.load(htmlString);           // parse HTML string
  
    // const liList = $("#s-results-list-atf > li"); // select result <li>s

    return $("#s-results-list-atf > li")             // select result <li>s
        .map((_, li) => ({                           // map to an list of objects
            asin: $(li).data("asin"),                   
            title: $("h2", li).text(),                
            price: $("span.a-color-price", li).text(),
            rating: $("span.a-icon-alt", li).text(),
            imageUrl: $("img.s-access-image").attr("src")
        }));
  }

// console.log(loadGraphicCards());
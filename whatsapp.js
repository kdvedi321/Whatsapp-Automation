let fs = require("fs");
let puppeteer = require("puppeteer");
(async function(){
    try{
        let browser = await puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:["--start-maximized"]
        });
        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto("https://web.whatsapp.com",{waitUntil:"networkidle0"});
        await tab.waitForSelector(".C28xL",{visible:true});
        await tab.click(".C28xL",{delay:200});
        await tab.waitForSelector(".gQzdc",{visible:true});
        await tab.type(".gQzdc","Vasu Goel",{delay:200});
        await tab.keyboard.press("Enter",{dealy:200});
        await tab.waitForSelector("._3F6QL._2WovP",{visible:true});
        await tab.type("._3F6QL._2WovP","It's working. An automated script",{delay:200});
        await tab.keyboard.press("Enter");
    }catch(err){
        console.log(err);
    }
})();
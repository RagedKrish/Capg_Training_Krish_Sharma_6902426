import {test} from "@playwright/test"

test("title",()=>{
    console.log("hii");
    
})
test("title2",()=>{
    console.log("hii2");
    
})
test("title3",()=>{
    console.log("hii3");
    
})

test("Amazon",async({browser})=>{
    let context=await browser.newContext();
    let page= await context.newPage();
    let page2=await context.newPage();

    await page.goto("https://www.amazon.in/");
    await page.locator('input#twotabsearchtextbox').fill("shoes");
    //await page.setViewportSize({width:200000,height:100000})
    await page.pause();
    let size=page.viewportSize()
    //await page.pause();
    console.log(size);
    
    await page.keyboard.press("Enter");
    await page2.goto("https://in.search.yahoo.com/");
    await page2.fill("#yschsp","Sahil services")
    await page2.keyboard.press("Enter")
})
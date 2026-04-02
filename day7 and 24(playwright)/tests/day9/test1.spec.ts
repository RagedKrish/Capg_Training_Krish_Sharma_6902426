import {test} from "@playwright/test"

// test("title",()=>{
//     console.log("hii");
    
// })
// test("title2",()=>{
//     console.log("hii2");
    
// })
// test("title3",()=>{
//     console.log("hii3");
    
// })

// test("Amazon",async({browser})=>{
//     let context=await browser.newContext();
//     let page= await context.newPage();
//     let page2=await context.newPage();

//     await page.goto("https://www.amazon.in/");
//     await page.locator('input#twotabsearchtextbox').fill("shoes");
//     //await page.setViewportSize({width:200000,height:100000})
//     await page.pause();
//     let size=page.viewportSize()
//     //await page.pause();
//     console.log(size);
    
//     await page.keyboard.press("Enter");
//     await page2.goto("https://in.search.yahoo.com/");
//     await page2.fill("#yschsp","Sahil services")
//     await page2.keyboard.press("Enter")
// })

// test("Amazon", async ({ browser }) => {
//     test.slow();

//     const context = await browser.newContext();
//     const page = await context.newPage();
  
//     await page.goto("https://www.amazon.in/", {
//       waitUntil: "load"
//     });
  
//     await page.waitForLoadState("networkidle");
  
//     const title = await page.title();
//     const url = await page.url();
//     console.log(title);
//     console.log(url);
//     await browser.close();
//   });

test("browser-control",async({browser,browserName})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.google.com/",
    {
        waitUntil: "load"
     });
     await page.waitForLoadState("networkidle");
     //let time=new Date().getTime();
    //await page.screenshot({ path:`screenshot/${browserName}.png` });
    console.log(await context.cookies());
    
})
// page
// browser
// browserName
// Context
// request


// COMMAND	                                   HEADED	                      PARALLEL
// npx playwright test	                      ❌ No (headless by default)	✅ Yes
// npx playwright test --headed               ✅ Yes	                        ✅ Yes
// npx playwright test --workers=1	          ❌ No	                        ❌ No (runs sequentially)
// npx playwright test --workers > 1	      ❌ No	                        ✅ Yes
// npx playwright test --headed --workers=3	  ✅ Yes	                        ✅ Yes
// npx playwright test --debug	              ✅ Yes	                        ❌ No (forces single worker)
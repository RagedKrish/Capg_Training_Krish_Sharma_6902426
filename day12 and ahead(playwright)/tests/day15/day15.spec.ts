import {test} from "@playwright/test"

// test("Explicit_Waits",async({page})=>{
//     await page.goto("https://www.google.com/");
//     // await page.waitForTimeout(2000);
//     // await page.waitForSelector('//a[@href="/minitv?ref_=nav_avod_desktop_topnav"]');
//     // await page.getByTestId('nav_cs_gb').waitFor({timeout:10000,state:"detached"});
//     await page.getByRole('combobox', { name: 'Search' }).waitFor({timeout:10000,state:"detached"});
//     // await page.getByTestId('nav_avod_desktop_topnav').click();
// })

// test("waits",async({page})=>{
//     await page.goto('https://www.flipkart.com/');
//     //await page.getByRole('button',{name:'✕'});
//     await page.getByPlaceholder('Search for Products, Brands and More').first().fill("shoes");
//     await page.keyboard.press("Enter");
//     const [newpage]=await Promise.all([//page.waitForEvent('popup'),
//         page.waitForNavigation(),
//         page.locator('//div[@class="bLCLBY nr15la"]').first().click()]);
//     //let price=await newpage.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent();
//     console.log(await page.url());
//     console.log(await newpage.url());
    
    
//     //console.log(price);
    
// })

// test("mouse_action",async ({page})=>{
//     // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2');
//     // await page.locator('//button[@id="btn_a"]').click({clickCount:2});   //-->if disabled you can use force:true
//     // await page.locator('//button[@id="btn_a"]').dblclick();
//     //diff bw dblclick and click is that dblclick dont have clickcount

//     // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0');
//     // await page.locator('//div[@id="circle"]').hover();
//     // await page.mouse.down();
//     // await page.waitForTimeout(3000);
//     // await page.mouse.up();


//     // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
//     // await page.locator('//img[@src="/assets/message-hint-nbRmWGWf.png"]').hover();

//     // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4');
//     // await page.locator('//input[@id="submit"]').click({force:true});
//     // await page.locator('//input[@id="submit"]').dispatchEvent("click");


//     // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=3');
//     // await page.locator('//div[@id="dragElement3"]').click();
//     // await page.locator('//div[@id="dragElement3"]').hover();
//     // await page.mouse.down();
//     // await page.locator('//div[@id="dropZone2"]').hover();
//     // await page.mouse.up();

//     // await page.locator('//div[@id="dragElement1"]').click();
//     // await page.locator('//div[@id="dragElement1"]').hover();
//     // await page.mouse.down();
//     // await page.locator('//div[@id="dropZone2"]').hover();
//     // await page.mouse.up();

//     // await page.locator('//div[@id="dragElement2"]').click();
//     // await page.locator('//div[@id="dragElement2"]').hover();
//     // await page.mouse.down();
//     // await page.locator('//div[@id="dropZone1"]').hover();
//     // await page.mouse.up();

//     // await page.locator('//div[@id="dragElement4"]').click();
//     // await page.locator('//div[@id="dragElement4"]').hover();
//     // await page.mouse.down();
//     // await page.locator('//div[@id="dropZone1"]').hover();
//     // await page.mouse.up();
//     //also can use dragTo
//     // await page.locator('//div[@id="dragElement3"]').click();
//     // await page.locator('//div[@id="dragElement3"]').dragTo(page.locator('//div[@id="dropZone2"]'));
//     // await page.locator('//div[@id="dragElement1"]').click();
//     // await page.locator('//div[@id="dragElement1"]').dragTo(page.locator('//div[@id="dropZone2"]'),{targetPosition:{x:330,y:10}});
//     // await page.locator('//div[@id="dragElement2"]').click();
//     // await page.locator('//div[@id="dragElement2"]').dragTo(page.locator('//div[@id="dropZone1"]'));
//     // await page.locator('//div[@id="dragElement4"]').click();
//     // await page.locator('//div[@id="dragElement4"]').dragTo(page.locator('//div[@id="dropZone1"]'),{targetPosition:{x:330,y:10}});

//     await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical');
//     await page.locator('//input').scrollIntoViewIfNeeded();
//     await page.locator('//input').check();

//     await page.waitForTimeout(3000);
// })

test("keyboard_action",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.getByLabel('name').click();
    await page.keyboard.type('Krish');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('krish18sharma21@gmail.com');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
})
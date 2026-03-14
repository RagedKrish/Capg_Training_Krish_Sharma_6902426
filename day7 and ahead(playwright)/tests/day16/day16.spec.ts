import {test,expect} from "@playwright/test"

test("standard_dropdown",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
    await page.locator('#country_code').selectOption({value:"+91"});
    await page.locator('//select[@id="select3"]').selectOption({value:"India"});
    await page.locator('//select[@id="select5"]').selectOption({value:"Rajasthan"});
    await page.locator('//select[@class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"]').last().selectOption({value:"Jaipur"});
    await expect(page.locator('//select[@id="select3"]')).toHaveValue("India");
    await page.waitForTimeout(3000);
})

test("multi_dropdown",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1');
    await page.locator('#select-multiple-native').selectOption([{value:"Mens Casual Slim Fit"},{value:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"},{value:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"}])
    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    await page.waitForTimeout(3000);
})

test("custom_dropdown",async({page})=>{
    await page.goto('https://www.myntra.com/shoes?rawQuery=shoes');
    await page.locator('//div[@class="sort-sortBy"]').click();
    const option=await page.locator('//ul[@class="sort-list"]/li').all();
    for( const item of option){
        const text=await item.textContent();
        console.log(text);
        if(text?.includes("Discount")){
            await item.click();
        }
    }
    await page.waitForTimeout(3000)
})

test("auto_dropdown",async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill("shoes");
    await page.locator('//div[@class="left-pane-results-container"]').waitFor({state:"visible"});
    const options=await page.locator('//div[@class="left-pane-results-container"]/div').all();
    for(const option of options){
        const text=await option.textContent();
        console.log(text);
        if(text?.includes("women sneakers")){
            option.click();
        }
    }
    await page.waitForTimeout(3000);
})

test("multiple_tabs",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://www.flipkart.com/')
    // let page2=await context.newPage();
    // await page2.goto('https://www.amazon.com/')
    await page.getByRole('button',{name:'✕'});
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill("shoes");
    await page.keyboard.press("Enter");
    const [newpage]=await Promise.all([page.waitForEvent('popup'),
        page.locator('//div[@class="bLCLBY nr15la"]').first().click()]);
    console.log(page.url());
    console.log(newpage.url());
    
    
    await page.waitForTimeout(3000);
})

test("multiple_tabs_prac",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0');
    let [page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').last().click()
    ])
    await page2.getByRole('button',{name:"Add to Cart"}).click();
    await page.waitForTimeout(3000);
})

test("download",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.locator('#writeArea').fill("Nimish");
    await page.locator('#fileName').fill("nimish.txt");
    //await expect(page.locator('#fileName')).toHaveValue('nimish.txt');
    await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    await page.waitForTimeout(3000);
})
import {test,expect} from "@playwright/test"
// test.use({actionTimeout:20000})
test(".type_method",async ({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).type("student");
    await page.waitForTimeout(2000); //hardcodedwait
    // await page.getByRole('textbox', { name: 'Username' }).type("student1"); //-->write ahead of the written thing
    // await page.getByRole('textbox', { name: 'Password' }).fill("Password123"); //-->replace the text with its content
    await page.getByRole('textbox', { name: 'Password' }).fill("Password123");
    await page.getByRole('button', { name: 'Submit' }).click();
    //console.log(await page.getByRole('textbox', { name: 'Username' }).inputValue());
    //console.log(await page.getByRole('textbox', { name: 'Username' }).isHidden());
    
    
})

// test("amazon",async ({page})=>{
//     await page.goto('https://amazon.in/');
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("Shoes");
//     await page.keyboard.press("Enter");
//     await page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]/h2/span').nth(64).waitFor();
//     let a=await page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]/h2/span').all();
//     console.log(a);
    
    
// })

// test("assertion",async ({page})=>{
//     // await page.setDefaultTimeout(10000)
//     //waitfortimeout is hardcode way
//     await page.goto("https://amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbx"]').fill('shoes');
//     //await page.locator('//input[@id="twotabsearchtextbx"]').fill("Shoes",{timeout:10000}) //to change timeout
//     // await page.locator('sahil').click();//to check timeout is 60000ms
//     // await expect(page).toHaveScreenshot();
//     // await expect(page).toHaveScreenshot();
//     // await expect.soft(page.locator('sahil')).toBeAttached(); //to check expect timeout is 10000ms
//     // await expect(page.locator('sahil')).not.toBeAttached();
//     //let text=await page.locator('(//h2[@class="as-title-block-left"]/span)[1]').textContent()
//     // let text=['nimish','sahil','krish']
//     // expect(text).toContain('sahi')
//     // console.log("soft let the code to fully run and then fail");
    
// })
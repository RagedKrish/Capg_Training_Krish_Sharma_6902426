import {test} from "@playwright/test"

test('shopper_stack',async({page})=>{
    test.slow();
    await page.goto('https://www.shoppersstack.com/');
    await page.locator('#loginBtn').click();
    // await page.locator('//span[.="Create Account"]').click();
    // await page.locator('//input[@id="First Name"]').fill('Krish');
    // await page.locator('//input[@id="Last Name"]').fill('Sharma');
    // await page.locator('//input[@id="Male"]').click();
    let email="krish123sharma@gmail.com"
    await page.locator('//input[@id="Email"]').fill(email);
    let password="Password@123";
    await page.locator('//input[@id="Password"]').fill(password);
    // await page.locator('//input[@id="Confirm Password"]').fill(password);
    //await page.locator('//input[@id="Terms and Conditions"]').click();
    await page.locator('//button[@id="Login"]').click();
    // await page.locator('#search').fill('headphone');
    // await page.locator('#searchBtn').click();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0,2000);
    await page.locator('//div[@class="MuiPaper-root MuiCard-root featuredProducts_productCard__xe40f MuiPaper-elevation1 MuiPaper-rounded aos-init aos-animate"]').first().click();
    await page.locator('//button[@id="Add To Cart"]').click();

    await page.locator('#cart').click();
    await page.locator('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textError MuiButton-sizeSmall MuiButton-textSizeSmall  css-1bhvu8"]').click();
    await page.locator('//button[contains(text(),"Yes")]').click();
    await page.locator('//span[contains(text(),"Continue Shopping")]').click();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0,2000);
    await page.locator('//div[@class="MuiPaper-root MuiCard-root featuredProducts_productCard__xe40f MuiPaper-elevation1 MuiPaper-rounded aos-init aos-animate"]').first().click();
    await page.locator('//button[@id="Add To Cart"]').click();
    await page.locator('#cart').click();
    await page.locator('#increase').click();
    await page.locator('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textError MuiButton-sizeSmall MuiButton-textSizeSmall  css-1bhvu8"]').click();
    await page.locator('//button[contains(text(),"Yes")]').click();
    await page.locator('//div[@class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-bjoz8z"]').click();
    await page.locator('//li[contains(text(),"Logout")]').click();
    await page.waitForTimeout(5000);
})
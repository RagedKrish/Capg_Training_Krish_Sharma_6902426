import {test} from "@playwright/test"

test("css_selector",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    //await page.locator("input#username").fill("student");
    await page.locator('[name="username"]').fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click();
    await page.locator("a.wp-block-button__link").click();
})

test("css_selector_practice",async({page})=>{
    await page.goto("https://techbeamers.com/practice-test-login/");
    //await page.locator("input#username").fill("student");
    await page.fill('[name="username"]',"testuser")
    await page.fill('[name="password"]',"password123")
    await page.click('button[type="submit"]');
})

test("xpath_practice",async({page})=>{
    await page.goto("https://techbeamers.com/practice-test-login/");
    //await page.locator("input#username").fill("student");
    await page.fill('//div/input[@id="username"]',"testuser")
    await page.fill('//div/input[@id="password"]',"password123")
    await page.click('//form/button');
})
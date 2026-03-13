import {test} from "@playwright/test"

 test("union",async ({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones");
    await page.keyboard.press("Enter");
    const items=await page.locator('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]/descendant::span)[3] | (//a[@class="a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"]/span[@class="a-price"]/span[@class="a-offscreen"])[1]')
    console.log(await items.allTextContents());
 })

// getby methods
// getbyText()
// getbyAltText()
// getbyLabel()
// getbyTitle()
// getbyPlaceholder()
// getbyRole()
// getbyTestId()

test("Get_by_methods",async ({page})=>{
    // await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.getByRole('textbox',{name:"username"}).fill('student')
    // await page.getByRole('textbox',{name:"password"}).fill('Password123');
    // await page.getByRole('button',{name:'Submit'}).click();
    //await page.getByLabel('Username',{exact:true}).fill('student');
    //await page.getByLabel('Password',{exact:true}).fill('Password123');
    //await page.getByText("Submit").first().click();

    await page.goto('https://sahil.com/');
    await page.getByAltText('BLACK AND PINK LEHENGA SAREE').click();
})

test("getByTestId",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId("username").fill("Nimish");
})
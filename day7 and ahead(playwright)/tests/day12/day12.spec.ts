// Contains  method in absolute path
//span[contains(text(),"Mens")]
//span[contains(@atribute,value)]

// //section[.. ..]/child::div/child::h1   --> only direct child
// //div[@id="form"]/descendant::input[@id="username"]  ---> any child indirect or direct

// //div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label  prev sibling

// //div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label/following-sibling::input next sibling

// //input[@id="username"]/parent::div  -->for parent
// //input[@id="username"]/..  -->for parent as well

// //input[@id="username"]/ancestor::section  --> indirect parent

// //button[@class="bJtikv"]/*[name()='svg']  --> svg ,path for using them

import {test} from "@playwright/test"

test("click",async ({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Phones");
    await page.keyboard.press("Enter");
    await page.locator('//div[@id="p_n_g-1003517064111/36816607011"]/descendant::a[@aria-label="Apply Android 14 filter to narrow results"]/descendant::i').click();
    await page.screenshot({path:'screenshot/android14.png'})
})
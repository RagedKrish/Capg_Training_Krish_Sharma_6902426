import {test} from "@playwright/test"

test("custom_waits",async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.waitForFunction(()=>{
        // return document.readyState==='complete';
        let ele=document.querySelectorAll('._quad-multi-asin-card-v2_fluid_fluidCard__3hmFA');
        return ele.length>=1;
    })
})
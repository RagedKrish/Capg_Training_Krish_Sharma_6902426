import {test} from "@playwright/test"

test("frames",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const pageframe=await page.frames();
    for(let frame of pageframe){
        console.log(await frame.title());
        
    }

    console.log(pageframe.length);
    console.log(await page.title());
})

test('frame_method',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const pageframe=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await pageframe?.locator('//input[@name="mytext1"]').fill('nimish');
    // const pageframe=await page.frame({url:'https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true'})
    // await pageframe?.locator('//div[@class="AB7Lab Id5V1"]').first().click();
    //const pageframe3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}).frameLocator('//iframe');
    const pageframe2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const pageframe3=await pageframe2?.frameLocator('//iframe');
    await pageframe3?.locator('//div[@class="AB7Lab Id5V1"]').first().click();
    await page.waitForTimeout(5000);
})

test('dialogs',async({page})=>{
    //page.on("event",()=>{})  --->all alert will handle
    //page.once("event",()=>{})  --->handle alert only once
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        
        if(dialog.type()=='prompt'){
            if(dialog.defaultValue()=='Harry Potter'){
                console.log(dialog.defaultValue());
                await dialog.accept();
        }
            else{await dialog.accept('Tom');}
        }
        else if(dialog.type()=='confirm'){
            await dialog.dismiss();
        }
        else{await dialog.accept();}
    });
    await page.goto('https://testautomationpractice.blogspot.com/');
    // page.once('dialog',async dialog=>{
    //     await dialog.accept();
    // });
    
    await page.locator('#alertBtn').click();
    await page.waitForTimeout(3000);
    // page.once('dialog',async dialog=>{
    //     await dialog.accept();
    // });
    await page.locator('#confirmBtn').click();
    
    await page.waitForTimeout(3000);
    // page.once('dialog',async(dialog)=>{
    //     await dialog.accept('Krish')
    // })
    await page.locator('#promptBtn').click();
    

    await page.waitForTimeout(3000);
})

test('notification',async({browser})=>{
    let context=await browser.newContext({permissions:['notifications']});
    let page=await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0');
    await page.locator('#browNotButton').click();
    let result= await page.evaluate(()=>{
        return Notification.requestPermission();
    })
    console.log(result);
    
    await page.waitForTimeout(2000);
})
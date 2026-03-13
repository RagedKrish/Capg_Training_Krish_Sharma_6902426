import {test,expect} from "@playwright/test"
import path from "path";

test('Authentication',async({browser})=>{
    let context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    let page=await context.newPage();
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/');
    let page2=await context.newPage();
    await page2.goto('https://the-internet.herokuapp.com/basic_auth');
    await expect(page2.locator('//div[@class="example"]/p')).toHaveText('Congratulations! You must have the proper credentials.');
    await page.waitForTimeout(3000);
})

test('Upload_file',async({page})=>{
    console.log(__dirname);
    console.log(__filename);
    //-->way 1
    // await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#singleFileInput').setInputFiles("C:/Users/krish/Downloads/assignment/day12 and ahead/tests/upload_files/demo.txt");
    // await page.getByRole('button',{name:'Upload Single File'}).click();
    // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/krish/Downloads/assignment/day12 and ahead/tests/upload_files/demo.txt","C:/Users/krish/Downloads/assignment/day12 and ahead/tests/upload_files/demo1.xlsx","C:/Users/krish/Downloads/meriexcel returns.xlsx"]);
    // await page.getByRole('button',{name:'Upload Multiple File'}).click();

    //--> way2
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"upload_files/demo.txt"));
    await page.getByRole('button',{name:'Upload Single File'}).click();
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"../../screenshot/android14.png"),path.join(__dirname,"upload_files/demo1.xlsx")]);
    await page.getByRole('button',{name:'Upload Multiple File'}).click();
    await page.waitForTimeout(4000);
})

test("download_with_path",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    let download_folder='C:/Users/krish/Downloads/assignment/day12 and ahead/downloads'
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.locator('#writeArea').fill("Nimish");
    await page.locator('#fileName').fill("nimish.txt");
    let [download_file]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    let fillename=await download_file.suggestedFilename()
    console.log(fillename);
    await download_file.saveAs(path.join(download_folder,fillename));
    await page.waitForTimeout(3000);
})
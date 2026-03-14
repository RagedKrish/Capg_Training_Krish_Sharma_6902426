import {test} from "@playwright/test";
import fs from 'fs'
import path from "path";

let data=fs.readFileSync(path.join(__dirname,"../../testdata/data.json"));
let datafile=JSON.parse(data);
let user=fs.readFileSync(path.join(__dirname,"../../testdata/user.json"));
let userfile=JSON.parse(user);

test('json_data',async()=>{
    console.log(datafile);
    for(let elm of datafile){
        console.log(elm.greet);
        
    }
})

test('json_user',async({page})=>{
    for(let i of userfile){
        await page.goto(i.url);
        await page.getByLabel('username').fill(i.username);
        await page.getByLabel('password').fill(i.password);
        await page.locator('#submit').click();
        await page.waitForTimeout(3000);
    }
})
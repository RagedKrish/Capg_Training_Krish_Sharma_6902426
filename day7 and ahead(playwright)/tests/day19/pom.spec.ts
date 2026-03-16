import {test} from "@playwright/test"
import example from "../../pom/example.page"
import fs from "fs"
import path from "path"

let user=fs.readFileSync(path.join(__dirname,"../../testdata/user.json"));
let userfile=JSON.parse(user);

test("pom",async({page})=>{
    let examplepage=new example(page);
    for(let u of userfile){
        await page.goto(u.url);
        await examplepage.login(u.username,u.password);
        await page.waitForTimeout(1000);
    }
})
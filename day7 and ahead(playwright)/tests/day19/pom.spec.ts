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
        await examplepage.usernameTF.fill(u.username);
        await examplepage.passwordTF.fill(u.password);
        await examplepage.SubmitBtn.click();
        await page.waitForTimeout(1000);
    }
})
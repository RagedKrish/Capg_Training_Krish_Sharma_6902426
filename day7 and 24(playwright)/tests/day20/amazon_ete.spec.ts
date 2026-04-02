import {test} from "@playwright/test"
import path from "path"
import fs from "fs"
import amazon from "../../pom/amazon.spec"

let productsfile=JSON.parse(fs.readFileSync(path.join(__dirname,"../../testdata/amazon_ete.json")))

test("amazon_ete",async({page})=>{
    let amazonweb=new amazon(page);
    for(let product of productsfile.products){
        console.log(product);
        await amazonweb.searchproduct(product);
        await amazonweb.select10gbram(page);
        let [newpage]=await Promise.all([page.waitForEvent('popup'),amazonweb.selectproduct(page,3)]) ;
        await amazonweb.additem(newpage,3)
        page.bringToFront();
    }
})
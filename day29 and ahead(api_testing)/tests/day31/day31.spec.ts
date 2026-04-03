import {test,request,expect} from "@playwright/test"
import path from "path"
import fs from "fs"

let data1=JSON.parse(fs.readFileSync(path.join(__dirname,"day31.json")));

test('Booking',async()=>{
    let req=await request.newContext();
    let baseurl=data1.baseUrl

    
    let r1=await req.post(`${baseurl}/auth`,{
        data:data1.login
    })
    await expect(r1.status()).toEqual(200);
    let token=(await r1.json()).token


    let r2=(await req.get(`${baseurl}/booking`))
    await expect(r2.status()).toEqual(200);
    console.log(await r2.json())


    let r3=await req.get(`${baseurl}/booking/${(await r2.json())[0].bookingid}`)
    await expect(r3.status()).toEqual(200);
    console.log(await r3.json())


    let r4=await req.post(`${baseurl}/booking`,{
        data:data1.create
    })
    await expect(r4.status()).toEqual(200);
    console.log(await r4.json());
    let bookingid=(await r4.json()).bookingid


    let r5=await req.put(`${baseurl}/booking/${bookingid}`,{
        headers:{
            Cookie: `token=${token}`
        },
        data:data1.update
    })
    await expect(r5.status()).toEqual(200);
    console.log(await r5.json())
})
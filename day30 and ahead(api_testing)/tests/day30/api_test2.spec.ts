import {test,request} from "@playwright/test"

test('post_Api_testing',async({})=>{
    let req=await request.newContext();
    let response=await req.post('https://petstore.swagger.io/v2/pet',{
        data:{
            id:51,
            name:'dog',
            status:'available'
        }
    })
    let resp=await response.json()
    console.log(resp)
    console.log((await response.json()).name)
})

test('get_Api_testing',async({})=>{
    let req=await request.newContext();
    let response=await req.get('https://petstore.swagger.io/v2/pet/51')
    console.log(await response.json());
    
})

test('put_Api_testing',async({})=>{
    let req=await request.newContext();
    let response=await req.put('https://petstore.swagger.io/v2/pet',{
        data:{
            id:51,
            name:'doggy',
            status:'available'
        }
    })
    let resp=await response.json()
    console.log(resp)
    console.log((await response.json()).name)
})

test('delete_Api_testing',async({})=>{
    let req=await request.newContext();
    let response=await req.delete('https://petstore.swagger.io/v2/pet/51')
    console.log(await response.json());
    
})
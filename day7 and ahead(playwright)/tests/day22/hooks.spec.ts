import {test} from "@playwright/test"

test("test1",async()=>{
    console.log("test 1");
})

test("test2",async()=>{
    console.log("test 2");
})

test.beforeAll('hook',async()=>{
    console.log('before all');
})
test.beforeEach('hook',async()=>{
    console.log('before each');
    
})
test.afterAll('hook',async()=>{
    console.log('after all');
    
})
test.afterEach('hook',async()=>{
    console.log('after each');
    
})
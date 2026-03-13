//annotations
// we are adding some extra label

//skip
//only
//fixme
//fail
//describe
//slow
//settimeout

import {test} from "@playwright/test"

test("test1",()=>{
    console.log("test1");
    
})
test.skip("test2",()=>{
    console.log("test2");
    
})
test.fixme("test3",()=>{
    console.log("test3");
    
})
test.fail("test4",()=>{
    test.slow();
    console.log("test4");
    test("test1",()=>{
        console.log("test1");
        
    })
    test("test2",()=>{
        console.log("test2");
        
    })
    test("test2",()=>{
        console.log("test3");
        
    })
    
})
test("test5",()=>{
    console.log("test5");
    
})
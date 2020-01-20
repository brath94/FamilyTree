const Male = require("../Male");
const Female = require("../Female");
test("Male Exists",()=>{
    const male = new Male("ankso");
    expect(male.name).not.toBe(null);
    expect(male.isMale()).toBeTruthy();
    
})

test("Male has wife",()=>{
    const male = new Male("aa");
    const f = new Female("bb");
    male.marry(f);
    expect(male.getWife()).toEqual(f)
      
})





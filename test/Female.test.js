const Male = require("../Male");
const Female = require("../Female");
const Person = require("../Person")
test("FeMale Exists",()=>{
    const female = new Female("bb");
    expect(female.name).not.toBe(null);
    expect(female.isFeMale()).toBeTruthy();  
})

test("FeMale has husband",()=>{
    const male = new Male("aa");
    const f = new Female("bb");
    f.marry(male);
    expect(f.getHusband()).toEqual(male)      
})


test("FeMale can give birth if married",()=>{
    const male = new Male("aa");
    const f = new Female("bb");
    f.marry(male);
    f.giveBirth("lol","male");
    expect(f.children.length).not.toBe(0)    
})

test("FeMale canot give birth if not  married",()=>{
    const f = new Female("bb");
    const result = f.giveBirth("lol","male")
    expect(result).toEqual(null);     
})

test("FeMale has no child",()=>{
    const male = new Male("aa");
    const f = new Female("bb");
    f.marry(male);
    f.giveBirth("lol","ssmale");
    expect(f.children.length).not.toBe(null)    
})



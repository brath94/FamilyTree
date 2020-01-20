const Family = require("../Family");
const Female = require("../Female");
const  Male  = require("../Male");

describe("Family Integration Test",()=>{
    test("Family Integration Test for Add member", ()=>{
        const male = new Male("aa");
        const feMale = new Female("bb");
        male.marry(feMale);
        feMale.giveBirth("waa","male");
        const children = feMale. getChildren();
        const family = new Family();
        family.addMember(children);
        const member =family.getMembers();
        expect(member.length).not.toBe(0);  
    });
    test("Family Integration Test for find by name", ()=>{
        const male = new Male("aa");
        const feMale = new Female("bb");
        male.marry(feMale);
        const child = feMale.giveBirth("waa","male");
        const family = new Family();
        family.addMember(child);
        const p = family.findMemberByName(child.name);
        expect(p).toBe(child);  
    })
      
})
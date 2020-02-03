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
        Family.addMember(null);
        const member =Family.getMembers();
        expect(member.length).toBe(0); 
        Family.addMember(children);
        expect(member.length).not.toBe(0);  
    });
    test("Family Integration Test for find by name", ()=>{
        const male = new Male("aa");
        const feMale = new Female("bb");
        male.marry(feMale);
        const child = feMale.giveBirth("waa","male");
        Family.addMember(child);
        const p = Family.findMemberByName(child.name);
        expect(p).toBe(child);  
    })
      
})
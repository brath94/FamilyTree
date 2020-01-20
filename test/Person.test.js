const Person= require("../Person")
test("Person Exists",()=>{
    const person = new Person("BR","female");
    expect(person.name).not.toBe(null);
    expect(person.gender).not.toBe(null);
    expect(person.name).toEqual("BR");
    expect(person.isFeMale()).toBeTruthy();
    expect(person.isMale()).toBeFalsy();
})

test("Person can Marry",()=>{
    const person = new Person("BR","female");
    const partner = new Person("ankso","male");
    person.marry(partner)
    expect(person.isMarried()).toBeTruthy();
})


const Person = require("../Person")
const Family = require("../Family");
const Female = require("../Female");
const Male  = require("../Male");
test("Person Exists", () => {
    const person = new Person("BR", "female");
    expect(person.name).not.toBe(null);
    expect(person.gender).not.toBe(null);
    expect(person.name).toEqual("BR");
    expect(person.isFeMale()).toBeTruthy();
    expect(person.isMale()).toBeFalsy();
})

test("Person can Marry", () => {
    const person = new Person("BR", "female");
    const partner = new Person("ankso", "male");
    person.marry(partner)
    expect(person.isMarried()).toBeTruthy();
})

test("Person  getFather", () => {
    const person = new Person("BR", "female");
    expect(person.getFather()).toEqual(null);
})

test("Person  getMother", () => {
    const person = new Person("BR", "female");
    expect(person.getMother()).toEqual(null);
})

test("Person  getChildren", () => {
    const person = new Person("BR", "female");
    expect(person.getChildren().length).toEqual(0);
})

test("Person  getPartne", () => {
    const person = new Person("BR", "female");
    expect(person.getPartner()).toEqual(null);
})

test("Person  getName", () => {
    const person = new Person("BR", "female");
    expect(person.getName()).toEqual("BR");
})

test("Person  getSblings", () => {
    const person = new Person("BR", "female");
    expect(person.getSblings().length).toEqual(1);
    const male = new Male("aa");
    const feMale = new Female("bb");
    male.marry(feMale);
    const child1 = feMale.giveBirth("waa1", "male");
    const child2 = feMale.giveBirth("waa2", "male");
    Family.addMember(child1);
    Family.addMember(child2);
    expect(child2.getSblings().length).toEqual(1);
    
})

test("Person  getDaughter", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);
    const child1 = feMale.giveBirth("test1", "female");
    Family.addMember(child1);

    const feMale1 = new Female("bb1");
    const male1 = new Male("malell");
    Family.addMember(feMale1);
    Family.addMember( male1);
    male1.marry(feMale1); 
    const child2 = feMale1.giveBirth("test11", "male");
    Family.addMember(child2);

    const feMale2 = new Female("bbmm2");
    const male2 = new Male("malell2");
    Family.addMember(feMale2);
    Family.addMember(male2);
    male2.marry(feMale2); 

    expect(feMale.getDaughters().length).toEqual(1);
    expect(feMale1.getDaughters().length).toEqual(1);
    expect(feMale2.getDaughters().length).toEqual(1);
    
})


test("Person  getSons", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);
    const child1 = feMale.giveBirth("test1", "male");
    Family.addMember(child1);

    const feMale1 = new Female("bb1");
    const male1 = new Male("malell");
    Family.addMember(feMale1);
    Family.addMember( male1);
    male1.marry(feMale1); 
    const child2 = feMale1.giveBirth("test11", "female");
    Family.addMember(child2);

    const feMale2 = new Female("bbmm2");
    const male2 = new Male("malell2");
    Family.addMember(feMale2);
    Family.addMember(male2);
    male2.marry(feMale2); 
   
    expect(feMale.getSons().length).toEqual(1);
    expect(feMale1.getSons().length).toEqual(1);
    expect(feMale2.getSons().length).toEqual(1);
    
})



test("Person  getBrotherInLaw", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);

    const child1 = feMale.giveBirth("test1", "male");
    Family.addMember(child1);

    const child2 = feMale.giveBirth("test22", "female");
    Family.addMember(child2);

    const male1 = new Male("new");
    Family.addMember( male1);
    male1.marry(child2);
   
    const male2 = new Male("new1");
    Family.addMember( male2);

    expect(male1.getBrotherInLaw().length).toEqual(1);
    expect(child1.getBrotherInLaw().length).toEqual(1);
    expect(male2.getBrotherInLaw().length).toEqual(1);
  
})



test("Person  getSisterInLaw", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);

    const child1 = feMale.giveBirth("test1", "male");
    Family.addMember(child1);

    const child2 = feMale.giveBirth("test22", "female");
    Family.addMember(child2);

    const female2 = new Female("new");
    Family.addMember(female2);
    female2.marry(child1);
   
    const male2 = new Male("new1");
    Family.addMember( male2);

    expect(female2.getSisterInLaw().length).toEqual(1);
    expect(child2.getSisterInLaw().length).toEqual(1);
    expect(male2.getSisterInLaw().length).toEqual(1);
  
})


test("Person  getMaternalAunt", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);

    const child1 = feMale.giveBirth("test1", "male");
    Family.addMember(child1);

    const child2 = feMale.giveBirth("test22", "female");
    Family.addMember(child2);

    const child3 = feMale.giveBirth("test22333", "female");
    Family.addMember(child3);

    const male2 = new Male("newkk");
    Family.addMember(male2);
    child2.marry(male2);

    const child22 = child2.giveBirth("test2233", "female");
    Family.addMember(child22);

   
    const male3 = new Male("aa");
    Family.addMember(male3);
    const feMale3 = new Female("bb");
    Family.addMember(feMale3);
    male3.marry(feMale3);
    const child33 = feMale3.giveBirth("test2233", "female");
    Family.addMember(child33);
    const child33husband = new Male("aa");
    Family.addMember(child33husband);
    child33husband.marry(child33);
    const child34 = child33.giveBirth("test2233", "female");
    Family.addMember(child34);
    

    expect(child22.getMaternalAunt().length).toEqual(1);
    expect(feMale.getMaternalAunt().length).toEqual(1);
    expect(child1.getMaternalAunt().length).toEqual(1);
    expect(child34.getMaternalAunt().length).toEqual(1);
  
})


test("Person  getMaternalUncle", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);

    const child1 = feMale.giveBirth("test1", "male");
    Family.addMember(child1);

    const child2 = feMale.giveBirth("test22", "female");
    Family.addMember(child2);


    const male2 = new Male("newkk");
    Family.addMember(male2);
    child2.marry(male2);

    const child22 = child2.giveBirth("test2233", "female");
    Family.addMember(child22);

   
    const male3 = new Male("aa");
    Family.addMember(male3);
    const feMale3 = new Female("bb");
    Family.addMember(feMale3);
    male3.marry(feMale3);
    const child33 = feMale3.giveBirth("test2233", "female");
    Family.addMember(child33);
    const child33husband = new Male("aa");
    Family.addMember(child33husband);
    child33husband.marry(child33);
    const child34 = child33.giveBirth("test2233", "female");
    Family.addMember(child34);
    

    expect(child22.getMaternalUncle().length).toEqual(1);
    expect(feMale.getMaternalUncle().length).toEqual(1);
    expect(child1.getMaternalUncle().length).toEqual(1);
    expect(child34.getMaternalUncle().length).toEqual(1);
  
})


test("Person  getPaternalUncle", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);

    const child1 = feMale.giveBirth("test1", "male");
    Family.addMember(child1);

    const child2 = feMale.giveBirth("test22", "male");
    Family.addMember(child2);


    const female2 = new Female("newkk");
    Family.addMember(female2);
    child2.marry(female2);

    const child22 = female2.giveBirth("test2233", "female");
    Family.addMember(child22);

   
    const male3 = new Male("aa");
    Family.addMember(male3);
    const feMale3 = new Female("bb");
    Family.addMember(feMale3);
    male3.marry(feMale3);
    const child33 = feMale3.giveBirth("test2233", "female");
    Family.addMember(child33);
    const child33husband = new Male("aa");
    Family.addMember(child33husband);
    child33husband.marry(child33);
    const child34 = child33.giveBirth("test2233", "female");
    Family.addMember(child34);


    const male4 = new Male("aaqq");
    Family.addMember(male4);
    const feMale4 = new Female("bbww");
    Family.addMember(feMale4);
    male4.marry(feMale4);
    const child444 = feMale4.giveBirth("test223388", "male");
    Family.addMember(child444);
    const female444 = new Female("aaqssq");
    Family.addMember(female444);
    female444.marry(child444);
    const child445 = female444.giveBirth("test223388", "male");
    Family.addMember(child445);


    

    expect(child22.getPaternalUncle().length).toEqual(1);
    expect(feMale.getPaternalUncle().length).toEqual(1);
    expect(child1.getPaternalUncle().length).toEqual(1);
    expect(child34.getPaternalUncle().length).toEqual(1);
    expect(child445.getPaternalUncle().length).toEqual(1);
  
})



test("Person  getMaternalUncle", () => {
    const male = new Male("aa");
    Family.addMember(male);
    const feMale = new Female("bb");
    Family.addMember(feMale);
    male.marry(feMale);

    const child1 = feMale.giveBirth("test1", "female");
    Family.addMember(child1);

    const child2 = feMale.giveBirth("test22", "male");
    Family.addMember(child2);


    const female2 = new Female("newkk");
    Family.addMember(female2);
    child2.marry(female2);

    const child22 = female2.giveBirth("test2233", "female");
    Family.addMember(child22);

   
    const male3 = new Male("aa");
    Family.addMember(male3);
    const feMale3 = new Female("bb");
    Family.addMember(feMale3);
    male3.marry(feMale3);
    const child33 = feMale3.giveBirth("test2233", "female");
    Family.addMember(child33);
    const child33husband = new Male("aa");
    Family.addMember(child33husband);
    child33husband.marry(child33);
    const child34 = child33.giveBirth("test2233", "female");
    Family.addMember(child34);


    const male4 = new Male("aaqq");
    Family.addMember(male4);
    const feMale4 = new Female("bbww");
    Family.addMember(feMale4);
    male4.marry(feMale4);
    const child444 = feMale4.giveBirth("test223388", "male");
    Family.addMember(child444);
    const female444 = new Female("aaqssq");
    Family.addMember(female444);
    female444.marry(child444);
    const child445 = female444.giveBirth("test223388", "male");
    Family.addMember(child445);


    

    expect(child22.getPaternalAunt().length).toEqual(1);
    expect(feMale.getPaternalAunt().length).toEqual(1);
    expect(child1.getPaternalAunt().length).toEqual(1);
    expect(child34.getPaternalAunt().length).toEqual(1);
    expect(child445.getPaternalAunt().length).toEqual(1);
  
})
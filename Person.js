class Person {
    constructor(name,gender){
        this.name = name ;
        this.gender = gender;
        this.father = null;
        this.mother = null;
        this.children = [];
        this.partner = null;
    }
    setFather(father){
        this.father = father;
    }
    setMother(mother){
        this.mother = mother;
    }
    getFather(){
        return this.father ;
    }
    getMother(){
        return this.mother ;
    }
    isMale(){
        return this.gender == Person.MALE 
    }
    isFeMale(){
        return this.gender == Person.FEMALE
    }
    setPartner(partner){
      this.partner = partner
    }
    marry(person){
        this.partner = person;
        person.setPartner(this);
    }
    addChildren(child){
        this.children.push(child)
    }
    isMarried(){
        return this.partner?true:false
    }
}

Person.FEMALE = "female";
Person.MALE = "male";
module.exports= Person;
const Person   = require("./Person")
const Male = require("./Male")

class Female extends Person {
    constructor(name){
        super(name,Person.FEMALE);
    }
    giveBirth(name,gender){
        if(!this.isMarried()) return null;
        let child = null;
        if(gender.toUpperCase() ===  Person.FEMALE.toUpperCase() ) child = new Female(name);
        if(gender.toUpperCase() ===  Person.MALE.toUpperCase() ) child = new Male(name)
        if(!child) return null
        child.setFather(this.partner);
        child.setMother(this);
        this.children.push(child)
        this.partner.addChildren(child);
        return child ;
    }
    getHusband(){
      return this.partner;
    }
    getChildren(){
        return this.children;
    }
}
module.exports = Female ;
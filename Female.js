const Person   = require("./Person")
const Male = require("./Male")

class Female extends Person {
    constructor(name){
        super(name,Person.FEMALE);
    }
    giveBirth(name,gender){
        if(!this.isMarried()) throw new Error("Person is not married yet!");
        let child = null;
        if(gender ===  Person.FEMALE ) child = new Female(name);
         else child = new Male(name)
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
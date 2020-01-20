const Person   = require("./Person")


class Male extends Person {
    constructor(name){
        super(name,Person.MALE);        
    }
    getWife(){
        return this.partner;
    }
}

module.exports = Male ;
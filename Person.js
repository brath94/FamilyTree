class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.father = null;
        this.mother = null;
        this.children = [];
        this.partner = null;
    }
    setFather(father) {
        this.father = father;
    }
    setMother(mother) {
        this.mother = mother;
    }
    getFather() {
        return this.father;
    }
    getMother() {
        return this.mother;
    }
    getChildren() {
        return this.children;
    }
    getPartner() {
        return this.partner;
    }
    isMale() {
        return this.gender == Person.MALE
    }
    isFeMale() {
        return this.gender == Person.FEMALE
    }
    setPartner(partner) {
        this.partner = partner
    }
    marry(person) {
        this.partner = person;
        person.setPartner(this);
    }
    addChildren(child) {
        this.children.push(child)
    }
    isMarried() {
        return this.partner ? true : false
    }
    getName() {
        return this.name;
    }
    getSblings() {
        const father = this.getFather();
       
        const childrens =  father?father.getChildren():[];
        const sblings = childrens.reduce((initial, child) => {
            if (child.getName() !== this.getName())
                initial.push(child.getName());
            return initial;
        }, [])
        return sblings.length != 0 ? sblings : ["NONE"]
    }

    getDaughters() {

        const childrens = this.getChildren();
        if(childrens.length ==0) return ["NONE"]
        const daughters = childrens.reduce((initial, child) => {
            if (child.isFeMale()) initial.push(child.getName());
            return initial;
        }, []);
        return  daughters.length != 0 ?  daughters : ["NONE"]
    }

    getSons() {
        const childrens = this.getChildren();
        if(childrens.length ==0) return ["NONE"]
        const sons = childrens.reduce((initial, child) => {
            if (child.isMale())
                initial.push(child.getName());
            return initial;
        }, [])
        return sons.length != 0 ? sons : ["NONE"]

    }
    getBrotherInLaw() {
        const partner = this.getPartner();
        const fatherInLaw = partner ? partner.getFather() : null;
        let siblings = fatherInLaw ? fatherInLaw.getChildren() : [];
       
        let father = this.getFather();
        let ownSiblings = father ? father.getChildren() : [];

        let brotherInLaw = siblings.reduce((initial, person) => {
            if (person && person.isMale() && person.getName() != partner.getName())
                  initial.push(person.getName());
            return initial;
        }, [])
        ownSiblings.reduce((initial, person) => {
            const partner = person.getPartner();
            if (partner && person.isFeMale() && person.getName() != this.getName()) {
                initial.push(partner.getName());
            }

            return initial;
        }, brotherInLaw);
        return brotherInLaw.length != 0 ? brotherInLaw : ["NONE"]
    }

    getSisterInLaw() {
        //partner  ke father ke female children 
        //apne father ke children male ke female ke wife
        const partner = this.getPartner();
        const fatherInLaw = partner ? partner.getFather() : null;
        let siblings = fatherInLaw ? fatherInLaw.getChildren() : [];
        let father = this.getFather();
        let ownSiblings = father ? father.getChildren() : [];

        let sisterInLaw = siblings.reduce((initial, person) => {
            if (person && person.isFeMale() && person.getName() != partner.getName())
                initial.push(person.getName());
            return initial;
        }, [])

        ownSiblings.reduce((initial, person) => {
            const partner = person.getPartner();
            if (partner && person.isMale() && person.getName() != this.getName()) {
                initial.push(partner.getName());
            }
            return initial;
        }, sisterInLaw);

        return sisterInLaw.length != 0 ? sisterInLaw : ["NONE"]
    }

    getMaternalAunt() {
        let mother = this.getMother();
        if(!mother) return ["NONE"]
        const mF =  mother.getFather()
        if(!mF) return ["NONE"]

        const siblings =  mF.getChildren();
        

        const aunt = siblings.reduce((initial, person) => {
            if (person && person.isFeMale() && person.getName() != mother.getName())
                initial.push(person.getName());
            return initial;
        }, [])
        return aunt.length != 0 ? aunt : ["NONE"]

    }

    getMaternalUncle() {
        let mother = this.getMother();
        if(!mother) return ["NONE"]
        const mF =  mother.getFather()
        if(!mF) return ["NONE"]
        const siblings = mF.getChildren();

        let uncle = siblings.reduce((initial, person) => {
            if (person && person.isMale())
                initial.push(person.getName());
            return initial;
        }, [])
        return uncle.length != 0 ? uncle : ["NONE"]
    }
    getPaternalUncle() {
        let father = this.getFather();
        if(!father) return ["NONE"];
        let fFather =  father.getFather();
        if(!fFather) return ["NONE"];
        const siblings =  fFather.getChildren() ;
        let pUncle = siblings.reduce((initial, person) => {
            if (person && person.isMale() && person.getName() !== father.getName())
                initial.push(person.getName());
            return initial;
        }, [])
        return pUncle.length != 0 ? pUncle : ["NONE"];
    }
    getPaternalAunt() {
        let father = this.getFather();
        if(!father) return ["NONE"];
        let fFather =  father.getFather();
        if(!fFather) return ["NONE"];
        const siblings =  fFather.getChildren() ;
        let pAunt = siblings.reduce((initial, person) => {
            if (person && person.isFeMale())
                initial.push(person.getName());
            return initial;
        }, [])
        return pAunt.length != 0 ? pAunt : ["NONE"];
    }
}

Person.FEMALE = "female";
Person.MALE = "male";
module.exports = Person;
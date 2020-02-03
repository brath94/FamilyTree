

class Family {
    constructor(){
        this.members = []
    }
    addMember(person){
        if(person)
          this.members.push(person);
    }
    findMemberByName(name){
        return this.members.find(member =>{
            return member.name == name
        })
    }
    getMembers(){
        return this.members;
    }
}
module.exports = new Family();
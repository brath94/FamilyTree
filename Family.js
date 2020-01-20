

class Family {
    constructor(){
        this.members = []
    }
    addMember(person){
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
module.exports = Family;
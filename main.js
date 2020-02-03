const Family = require("./Family");
const { createFamily } = require("./createFamily");
createFamily();//Load family Tree

function getRelationShip(person, relation) {
    const personInfo = Family.findMemberByName(person);
    if (!personInfo) return "PERSON_NOT_FOUND";
    switch (relation) {
        case "Siblings":
            return personInfo.getSblings().join(" ");
        case "Son":
            return personInfo.getSons().join(" ");
        case "Daughter":
            return personInfo.getDaughters().join(" ");
        case "Brother-In-Law":
            return personInfo.getBrotherInLaw().join(" ");
        case "Sister-In-Law":
            return personInfo.getSisterInLaw().join(" ");
        case "Maternal-Aunt":
            return personInfo.getMaternalAunt().join(" ");
        case "Maternal-Uncle":
            return personInfo.getMaternalUncle().join(" ");
        case "Paternal-Uncle":
            return personInfo.getPaternalUncle().join(" ");
        case "Paternal-Aunt":
            return personInfo.getPaternalAunt().join(" ");
        default:
            break;
    }

}

function addChild(person, childName, childGender) {

    const personInfo = Family.findMemberByName(person);
    if (!personInfo) return "PERSON_NOT_FOUND";
    if (personInfo.isMale()) return "CHILD_ADDITION_FAILED";
    const addChild = personInfo.giveBirth(childName, childGender);
    if (addChild) {
        Family.addMember(addChild);
        return "CHILD_ADDITION_SUCCEEDED";
    }
    return "CHILD_ADDITION_FAILED"
}


exports.processLine = (line) => {

    const inputs = line.split(" ");
    let output = ""
    switch (inputs[0]) {
        case "ADD_CHILD":
            output = addChild(inputs[1], inputs[2], inputs[3])
            break;
        case "GET_RELATIONSHIP":
            output = getRelationShip(inputs[1], inputs[2])
            break;
        default:
            break;
    }
    console.log(output)
}

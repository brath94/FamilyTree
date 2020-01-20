const Female = require("./Female");
const Male = require("./Male");
const Family = require("./Family");


function createFamily() {
    const KingShanFamily = new Family();

    //king shan 
    const KingShan = new Male("king Shan");
    KingShanFamily.addMember(KingShan);


    //Queen Anga 
    const QueenAnga = new Female("Queen Anga");
    KingShanFamily.addMember(QueenAnga);

    //Marry
    KingShan.marry(QueenAnga);

    //child 1. Chit
    const chit = QueenAnga.giveBirth("Chit", "male")
    KingShanFamily.addMember(chit);

    //child 2. Ish
    const ish = QueenAnga.giveBirth("Ish", "male")
    KingShanFamily.addMember(ish);

    //child 3. Vich
    const vich = QueenAnga.giveBirth("Vich", "male")
    KingShanFamily.addMember(vich);

    // child 4. Arash

    const aras = QueenAnga.giveBirth("Aras", "male");
    KingShanFamily.addMember(aras);

    // child 5 : satya 
    const satya = QueenAnga.giveBirth("Satya", "female");
    KingShanFamily.addMember(satya);

    const amba = new Female("Amba");
    satya.marry(amba);


    const lika = new Female("Lika");
    vich.marry(lika);

    const chitra = new Female("Chitra");
    aras.marry(chitra);

    const vyan = new Male("Vyan");
    satya.marry(vyan);

    //Dritha
    const dritha = amba.giveBirth("Dritha", "female");
    KingShanFamily.addMember(dritha);


    //Tritha
    const tritha = amba.giveBirth("Tritha", "female");
    KingShanFamily.addMember(tritha);

    //Vritha
    const vritha = amba.giveBirth("Vritha", "female");
    KingShanFamily.addMember(vritha);

    //dritha marry Jaya
    const jaya = new Male("Jaya");
    dritha.marry(jaya);

    //Yodhan
    const yodhan = dritha.giveBirth("Yodhan", "male");
    KingShanFamily.addMember(yodhan);


    //Vila
    const vila = lika.giveBirth("Vila", "female");
    KingShanFamily.addMember(vila);

    //Chika
    const chika = lika.giveBirth("Chika", "female");
    KingShanFamily.addMember(chika);

    //Jnki & Ahit chitra
    const jnki = chitra.giveBirth("Jnki", "female");
    KingShanFamily.addMember(jnki);

    const ahit = chitra.giveBirth("Ahit", "male");
    KingShanFamily.addMember(ahit);

    //Jnki marries Arit
    const arit = new Male("Arit");
    jnki.marry(arit);

    //laki & Lavnya
    const laki = jnki.giveBirth("Laki", "male");
    KingShanFamily.addMember(laki);

    const lavnya = jnki.giveBirth("Lavnya", "female");
    KingShanFamily.addMember(lavnya);

   //Asva-M Vyas-M Atya-F:Satya
   const asva = satya.giveBirth("Asva", "male");
   KingShanFamily.addMember(asva);

   const vyas = satya.giveBirth("Vyas", "male");
   KingShanFamily.addMember(vyas);

   const Atya = satya.giveBirth("Atya", "female");
   KingShanFamily.addMember(Atya);

   //asva marries Satvy
   const satvy = new FeMale("Satvy");
   asva.marry(satvy);

   //Vasa-M:satvy
   const vasa = satvy.giveBirth("Vasa", "male");
   KingShanFamily.addMember(vasa);

   //Krpi marries vyas
   const krpi = new FeMale("Krpi");
   vyas.marry(krpi);

   //Kriya-M  Krithi-F Krpi
   const kriya = krpi.giveBirth("Kriya", "male");
   KingShanFamily.addMember(kriya);

   const krithi = krpi.giveBirth("Krithi", "female");
   KingShanFamily.addMember(krithi);


}


createFamily()
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "SSB";
    }
}
const std1 = new Student(1,"Sajeeb");
const std2 = new Student(2, "Shakib");
console.log(std1.name,std2.name);
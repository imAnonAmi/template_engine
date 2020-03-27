// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//REMEMBER: to add the ./ in front of parent class (e.g. ./"Employee")
const Employee = require("./Employee");

class Intern extends (Employee){
    constructor(name,id,email,school){
//Same as with Manager, REMEMBER that *super* is what retrieves properties from base class, i.e. Employee 
    super(name,id,email);
//If you FORGET to add *super* the *this* below will cause test to fail!
    this.school = school;
    };

//Return the school value
getSchool() {
    return this.school;
};

//Return the role
getRole() {
    return "Intern";
};
};

module.exports = Intern;
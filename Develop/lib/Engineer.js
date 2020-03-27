// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee. 
//REMEMBER: to add the ./ in front of parent class (e.g. ./"Employee")
const Employee = require("./Employee");

class Engineer extends (Employee) {
    constructor(name,id,email,github){
//Same as with Manager, REMEMBER that *super* is what retrieves properties from base class, i.e. Employee
    super(name,id,email);
//Don't forget to add the ^super^
    this.github = github;
    };

//Return the github value. Use getGithub to match test.
    getGithub(){
        return this.github;
    };
//Return the role
getRole() {
    return "Engineer";
};
};

module.exports = Engineer;

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//REMEMBER: to add the ./ in front of parent class (e.g. ./"Employee")
const Employee = require("./Employee");
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

//REMEMBER that *super* is what retrieves properties from base class, i.e. Employee       
        super(name, id, email);
//And THEN switching to *this* adds a new property to *this* class, i.e. officeNumber
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };

}

module.exports = Manager;

class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
    //return name
    getName(){
        return this.name;
    };

    //return id
    getId(){
        return this.id;
    };
    //return email
    getEmail(){
        return this.email;
    };
    //return role
    getRole() {
        return "Employee";
    };
  };

  module.exports = Employee;
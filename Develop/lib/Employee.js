// const inquirer = require("inquirer");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
// const Manager = require("./Manager");

class Employee {
    constructor(name, id, email,){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole() {
        return (Employee);
        console.log(Employee);
    };
    
}

module.exports = Employee;
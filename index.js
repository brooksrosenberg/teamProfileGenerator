const fs = require('fs');
const inquirer = require('inquirer');



const Employee = require("./Develop/lib/Employee");
const Engineer = require("./Develop/lib/Engineer");
const Manager = require("./Develop/lib/Manager");
const Intern = require("./Develop/lib/Intern");




const team = []
 addToTeam();

 function addToTeam(){
     inquirer.prompt([
         {
            type: 'list',
            name: 'member type',
            message: "Which type of team member would you like to add? ",
            choices: ['Manager', 'Engineer', 'Intern', 'No more members to add'],
         }
     ]).then(function(data){
         const role = data.newEmployee;
         if (role === "Manager"){
             managerinfo();
         }
         else if (s){

         }
     })
 };
     





// {
//     type: 'input',
//     name: 'Manager name',
//     message: "What is the team manager's name? ",
// },
// {
//     type: 'input',
//     name: 'Manager id',
//     message: "What is the team manager's id? ",
// },
// {
//     type: 'input',
//     name: 'Manager email',
//     message: "What is the team manager's email? ",
// },
// {
//     type: 'input',
//     name: 'Manager office number',
//     message: "What is the team manager's office number? ",
// },

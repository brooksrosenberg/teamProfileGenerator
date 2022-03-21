const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateMarkdown = require('./utils/generateMarkdown');
const { moduleExpression } = require('@babel/types');


const team = [];

function init() {
function addManager() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? ",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id? ",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email? ",
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number? ",
        },

    ]).then(function (data) {
        console.log(data);
        //make new manager with data
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
        //push new manager to team array
        team.push(manager);
        console.log(team);
        //call addToTeam function
        addToTeam();
    })
};


function addToTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: "Which type of team member would you like to add? ",
            choices: ['Engineer', 'Intern', 'No more members to add'],
        }
    ]).then(function (data) {
        const role = data.memberType;
        console.log(data.memberType);
        // look into a switch case
        switch (role) {
            case "Engineer":
                return addEngineer();
                break;
            case "Intern":
                return addIntern();
                break;
            default:
                writeFile();
        }
    })
};

function addEngineer() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name? ",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id? ",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email? ",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github? ",
        },

    ]).then(function (data) {
        console.log(data);
        //make new engineer with data
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        //push new engineer to team array
        team.push(engineer);
        console.log(team);
        //call addToTeam function
        addToTeam();
    })
};

function addIntern() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name? ",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id? ",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email? ",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Where does the intern go to school? ",
        },

    ]).then(function (data) {
        console.log(data);
        //make new engineer with data
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        //push new engineer to team array
        team.push(intern);
        console.log(team);
        //call addToTeam function
        addToTeam()
    })
};


//create function to write file
function writeFile() {
    //console.log(team);
    fs.writeFile("./Develop/dist/.index.html", generateMarkdown(team), (err) => {
        err ? console.log(err) : console.log('You have successfully created an HTML file!')
    })
}

// TODO: Create a function to initialize app


    addManager()
        // .then((team) => {
        //     return generateMarkdown(team);
        // })
        // .then(createdHTML => {
        //     return writeFile(createdHTML);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
}
module.exports = index.js;

init();

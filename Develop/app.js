const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employees = [];
const writeFileAsync = util.promisify(fs.writeFile);

//Choosing team members. Even though this is defined first, it actually is only called within other functions (e.g. buildManager, addEngineer, addIntern). The first (and only) globally called function is buildManager which starts the app.

function chooseTeam() {
    return inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}

//Defines properties for, and then adds the Manager. This is the first function called within the app!
function buildManager() {
    console.log("Welcome to Team Template Engine.");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hello team builder! To begin, what is the name of your Manager?:",
            default: function () {
                return "Andrew";
            }
        },
        {
            type: "input",
            name: "id",
            message: "Great! What is your Manager's ID?:",
            default: function () {
                return "1";
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your Manager's email address?:",
            default: function () {
                return "Andrew@manager.com";
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your Manager's office number?:",
            default: function () {
                return "13";
            }
        }

    ])
        .then(function (data) {
            const Manager1 = new Manager(data.name, data.id, data.email, data.officeNumber)
            employees.push(Manager1);

            const html = render(employees);
//Use writeFileAsync below to update the 'team.html' content with each new Employee created. Note that outputPath is defined as a constant above.
            writeFileAsync(outputPath, html);
            chooseTeam();
        });
};
//Defines properties for, and then adds a new Engineer
function addEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hello team builder! To begin, what is the name of your Engineer?:",
            default: function () {
                return "Ken";
            }
        },
        {
            type: "input",
            name: "id",
            message: "Great! What is your Engineer's ID?:",
            default: function () {
                return "2";
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your Engineer's email address?:",
            default: function () {
                return "Ken@engineer.com";
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your Engineer's Github account?:",
            default: function () {
                return "NASAGuy57";
            }
        }

    ])
        .then(function (data) {
            const Engineer1 = new Engineer(data.name, data.id, data.email, data.github)
            employees.push(Engineer1);

            const html = render(employees);
//Use writeFileAsync below to update the 'team.html' content with each new Employee created. Note that outputPath is defined as a constant above.
            writeFileAsync(outputPath, html);
            chooseTeam();
        });
               
        
};

//Defines properties for, and then adds a new Intern
function addIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hello team builder! To begin, what is the name of your Intern?:",
            default: function () {
                return "Clarence";
            }
        },
        {
            type: "input",
            name: "id",
            message: "Great! What is your Intern's ID?:",
            default: function () {
                return "3";
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your Intern's email address?:",
            default: function () {
                return "Clarence@Intern.com";
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is your Intern's school?:",
            default: function () {
                return "Nerd Tech";
            }
        }

    ])
        .then(function (data) {
            const Intern1 = new Intern(data.name, data.id, data.email, data.school)
            employees.push(Intern1);

            const html = render(employees);
//Use writeFileAsync below to update the 'team.html' content with each new Employee created. Note that outputPath is defined as a constant above.
            writeFileAsync(outputPath, html);
            chooseTeam();
        });
               
        
};

//BuildTeam and shut it down
function buildTeam(){
    console.log("Your team template has been built!");
    return;
}


buildManager();

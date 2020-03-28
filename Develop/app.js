const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
//This is where we make a variable that is the relative path of our output directory. Read up more on path: https://nodejs.org/docs/latest/api/path.html later
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//Maybe need a const for employees to push to render?
const employees = [];
const writeFileAsync = util.promisify(fs.writeFile);
//Choosing team members, first run inside of buildManager which begins the show

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
            console.log(data);
            const Manager1 = new Manager(data.name, data.id, data.email, data.officeNumber)
            employees.push(Manager1);

            const html = render(employees);
            chooseTeam();

        });
};

function addEngineer() {
    console.log("Welcome to Team Template Engine.");
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
            console.log(data);
            const Engineer1 = new Engineer(data.name, data.id, data.email, data.github)
            employees.push(Engineer1);

            const html = render(employees);
            console.log(employees);
            console.log(html);

            writeFileAsync(outputPath, html);
            chooseTeam();
        });
               
        
};

//Add Intern
function addIntern() {
    console.log("Welcome to Team Template Engine.");
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
            console.log(data);
            const Intern1 = new Intern(data.name, data.id, data.email, data.school)
            employees.push(Intern1);

            const html = render(employees);
            console.log(employees);
            console.log(html);

            writeFileAsync(outputPath, html);
            chooseTeam();
        });
               
        
};

//BuildTeam and shut it down
function buildTeam(){
    console.log("Your team template has been built!");
    return;
}
// After the user has input all answers desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


buildManager();



// Make sure it works, states purpose



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

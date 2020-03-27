const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//This is where we make a variable that is the relative path of our output directory. Read up more on path: https://nodejs.org/docs/latest/api/path.html later
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function buildTeam(){
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Hello team builder! To begin, what is the name of your Manager?:"
    },
//REMEMBER: commas not semi-colons
    {
        type: "input",
        name: "id",
        message: "Great! What is your Manager's ID?:"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Manager's email address?:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your Manager's office number?:"
    },



]);
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

 async function init() {
// Make sure it works, states purpose
     console.log("Welcome to Team Template Engine.");
     
     try {
        const employees = await buildTeam();
//Pass information into render
        render(employees);
//Use fs to create the HTML roster
        await render("team.html", outputPath);

        console.log("Your team template has been built!")
     } catch (err)
    {
        console.log(err);
    }
 };
 
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

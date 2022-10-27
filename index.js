const questions = require('./utils/questions');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const renderTeam = require('./utils/renderTeam');

const inquirer = require("inquirer");
const fs = require("fs");
//const chalk = require("chalk");

let employees = [];
let company;

function startPrompt() {
    return inquirer.prompt(questions.startPrompt).then((answer) => {
        company = answer.company;
        if(answer.role === 'manager'){
            managerQuestions();
        } else if (answer.role === 'engineer') {
            engineerQuestions();
        } else {
            internQuestions();
        }
    })
}

function managerQuestions(){
    return inquirer.prompt(questions.uniqueQManager).then((answer) => {
        const addEmployee = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        employees.push(addEmployee)
        addNewEmployee();
    })
}
function engineerQuestions(){
    return inquirer.prompt(questions.uniqueQEngineer).then((answer) => {
        const addEmployee = new Engineer(answer.name, answer.id, answer.email, answer.gitHub);
        employees.push(addEmployee);
        addNewEmployee();
    })
}
function internQuestions(){
    return inquirer.prompt(questions.uniqueQIntern).then((answer) => {
        const addEmployee = new Intern(answer.name, answer.id, answer.email, answer.school);
        employees.push(addEmployee);
        addNewEmployee();
    })
}

function addNewEmployee(){
    return inquirer.prompt(questions.moreEmployees).then((answer) => {
        if (answer.newEmployee) {
            promptEmployeeType();
        } else {
            console.log(company);
            console.log(employees);
            let html = renderTeam(company, employees);
            buildTeamFile(html)
            return;

        }

    })
}

function promptEmployeeType(){
    return inquirer.prompt(questions.newEmployeeType).then((answer) => {
        if(answer.role === 'manager'){
            managerQuestions();
        } else if (answer.role === 'engineer') {
            engineerQuestions();
        } else {
            internQuestions();
        }
    })
}

function buildTeamFile(data) {
    fs.writeFile("./dist/team.html", data, (err) => err ? console.log(err) : console.log('Team Profile file successfully written'));
}
startPrompt();
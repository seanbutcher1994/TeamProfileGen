const questions = require('./utils/questions');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');

const inquirer = require("inquirer");
// const fs = require("fs");
//const chalk = require("chalk");

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
        //commonQuestions();
    })
}

function managerQuestions(){
    return inquirer.prompt(questions.uniqueQManager).then((answer) => {

    })
}
function engineerQuestions(){
    return inquirer.prompt(questions.uniqueQEngineer).then((answer) => {

    })
}
function internQuestions(){
    return inquirer.prompt(questions.uniqueQIntern).then((answer) => {

    })
}
startPrompt();
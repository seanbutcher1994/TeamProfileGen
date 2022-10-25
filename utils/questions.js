//const chalk = require("chalk");



const startPrompt = [
    {
        name: 'company',
        type: 'input',
        message: 'What is the name of your company?'
    },
    {
        name: 'role',
        type: 'list',
        message: 'What is this team members role?',
        choices: [
            'manager',
            'engineer',
            'intern'
        ],
        default: 'manager'
    }
];

function commonQuestions(role="employee"){
    return [
        {
            name: 'name',
            type: 'input',
            message: `What is the ${role}'s name?`
        },
        {
            name: 'id',
            type: 'input',
            message: `What is the ${role}'s id?`
        },
        {
            name: 'email',
            type: 'input',
            message: `What is the ${role}'s email address`,
            validate: function (userInput) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return chalk.redBright('Please enter a valid email');
                };
            } 
        }

    ]
}

const uniqueQManager = [
    ...commonQuestions('manager'),
    {
        name: 'officeNumber',
        type: 'input',
        message: `What is the manager's office or branch number/id?`
    },
]

const uniqueQEngineer = [
    ...commonQuestions('engineer'),
    {
        name: 'gitHub',
        type: 'input',
        message: `What is the engineer's gitHub link?`
    }
]

const uniqueQIntern = [
    ...commonQuestions('intern'),
    {
        name: 'school',
        type: 'input',
        message: `What is the intern's school?`
    }
]

const moreEmployees = [
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Would you like to add another employee?',
        default: 'true'
    }
]

const newEmployeeType = [
    {
        name: 'role',
        type: 'list',
        message: 'What is this team members role?',
        choices: [
            'manager',
            'engineer',
            'intern'
        ],
        default: 'manager'
    }
]
module.exports = {
    startPrompt,
    uniqueQManager,
    uniqueQEngineer,
    uniqueQIntern,
    moreEmployees,
    newEmployeeType,

}
// Allowing access to employee.js
const Employee = require('./Employee');
// Extending new class by the parent class and include previous params.
class Engineer extends Employee {
    // Constructor function to add parameter uniwe to manager class
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    // Function to return employee's github page which is unique to Engineer class
    getGitHub(){
        return this.gitHub;
    }
    // Function to override the emploee's role to 'Engineer'
    getRole(){
        return 'Engineer'
    }
}
// Export the class
module.exports = Engineer;
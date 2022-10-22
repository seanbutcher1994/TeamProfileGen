// Allowing access to employee.js
const Employee = require('./Employee');

// Extending the new class by the parent class and includes previous params.
class Intern extends Employee {
    // Constructor function to add parameter unique to Intern class.
    constructor(id, email, name, school){
        super(id, name, email);
        this.school = school;
    }
    // Function to return school which is unique to intern class
    getSchool(){
        return this.school;
    }
    // Function to override employee's role to 'Intern'
    getRole(){
        return 'Intern'
    }
}
// Export the class
module.exports = Intern;
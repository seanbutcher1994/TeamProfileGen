// Allowing access to employee.js
const Employee = require('./Employee');

// Extending the new class by the parent class and includes previous params.
class Manager extends Employee {
    // Constructor function to add parameter unique to manager calss
    constructor(id, email, name, officeNumber){
        super(id, email, name);
        this.officeNumber = officeNumber;
    }
    // Function to return the officeNumber which is unique to manager class
    getOfficeNumber(){
        return this.officeNumber;
    }
    // Function to override the employee's role to 'Manager'
    getRole(){
        return 'Manager'
    }
}

// Export the class
module.exports = Manager;
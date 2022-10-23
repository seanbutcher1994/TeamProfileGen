
// Parent Class
class Employee {
    // Constructor function which will feed into other classes.
    constructor(id, email, name){
        this.id = id;
        this.email = email;
        this.name = name;
    }
    // Function to return ID
    getId(){
        return this.id;
    }
    // Function to return Email
    getEmail(){
        return this.email;
    }
    // Funcrion to return Name
    getName(){
        return this.name;
    }
    // Function to return type of class
    getRole(){
        return 'Employee'
    }
}
// Export the class
module.exports = Employee;
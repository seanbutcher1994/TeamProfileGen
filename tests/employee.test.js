// Get access to Employee JS file
const Employee = require('../lib/Employee');
// create new employee with an Id, email and name property
const employee = new Employee('sean', '123', 'sean@sean.com')

// Runs tests to confirm that the functions return the correct values
test('can we get the employee instance to instantiate', () => {
    expect(employee.name).toBe('sean');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('sean@sean.com');
});

test('getID should give the correct ID', () => {
    const actualID = '123';
    expect(employee.getId()).toBe(actualID);
});

test('getEmail should return the correct email', () => {
    const actualEmail = 'sean@sean.com'
    expect(employee.getEmail()).toBe(actualEmail);
});

test('getName should return the correct name', () => {
    const actualName = 'sean';
    expect(employee.getName()).toBe(actualName);
})
test('getRole should return the correct role', () => {
    const actualRole = 'Employee';
    expect(employee.getRole()).toBe(actualRole);
})
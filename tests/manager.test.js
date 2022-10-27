const Manager = require("../lib/Manager");
const manager = new Manager('sean', '123', 'sean@sean.com', '321');

test('can we get the manager instance to instantiate', () => {
    expect(manager.name).toBe('sean');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('sean@sean.com');
    expect(manager.officeNumber).toBe('321');
});

test('getID should give the correct ID', () => {
    const actualID = '123';
    expect(manager.getId()).toBe(actualID);
});

test('getEmail should return the correct email', () => {
    const actualEmail = 'sean@sean.com'
    expect(manager.getEmail()).toBe(actualEmail);
});

test('getName should return the correct name', () => {
    const actualName = 'sean';
    expect(manager.getName()).toBe(actualName);
})

test('getOfficeNumber should return the correct school', () => {
    const actualOfficeNumber = '321';
    expect(manager.getOfficeNumber()).toBe(actualOfficeNumber);
})
test('getRole should return the correct role', () => {
    const actualRole = 'Manager';
    expect(manager.getRole()).toBe(actualRole);
})
const Engineer = require("../lib/Engineer");
const engineer = new Engineer('123', 'sean@sean.com', 'sean', 'seanbutcher1994');

test('can we get the engineer instance to instantiate', () => {
    expect(engineer.name).toBe('sean');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('sean@sean.com');
    expect(engineer.gitHub).toBe('seanbutcher1994');
});

test('getID should give the correct ID', () => {
    const actualID = '123';
    expect(engineer.getId()).toBe(actualID);
});

test('getEmail should return the correct email', () => {
    const actualEmail = 'sean@sean.com'
    expect(engineer.getEmail()).toBe(actualEmail);
});

test('getName should return the correct name', () => {
    const actualName = 'sean';
    expect(engineer.getName()).toBe(actualName);
})

test('getGitHub should return the correct school', () => {
    const actualGitHub = 'seanbutcher1994';
    expect(engineer.getGitHub()).toBe(actualGitHub);
})
test('getRole should return the correct role', () => {
    const actualRole = 'Engineer';
    expect(engineer.getRole()).toBe(actualRole);
})
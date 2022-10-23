
const Intern = require("../lib/Intern");
const intern = new Intern('123', 'sean@sean.com', 'sean', 'UWA');

test('can we get the intern instance to instantiate', () => {
    expect(intern.name).toBe('sean');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('sean@sean.com');
    expect(intern.school).toBe('UWA');
});

test('getID should give the correct ID', () => {
    const actualID = '123';
    expect(intern.getId()).toBe(actualID);
});

test('getEmail should return the correct email', () => {
    const actualEmail = 'sean@sean.com'
    expect(intern.getEmail()).toBe(actualEmail);
});

test('getName should return the correct name', () => {
    const actualName = 'sean';
    expect(intern.getName()).toBe(actualName);
})

test('getSchool should return the correct school', () => {
    const actualSchool = 'UWA';
    expect(intern.getSchool()).toBe(actualSchool);
})
test('getRole should return the correct role', () => {
    const actualRole = 'Intern';
    expect(intern.getRole()).toBe(actualRole);
})

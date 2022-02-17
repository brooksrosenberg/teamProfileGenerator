const Engineer = require("../lib/Engineer");

describe("github", () => {
it("generates github from constructor", () => {
    const testEx = "exampleGithub";
    const newEmployee = new Engineer("Tom", 1, "mail@email.com", testEx);
    expect(newEmployee.github).toBe(testEx);
})
});
describe("getRole", () => {
    it("getsRole() should give result Engineer", () => {
        const testEx = "Engineer";
        const newEmployee = new Engineer("Tom", 50, "mail@email.com",  testEx);
        expect(newEmployee.getRole()).toBe(testEx); 
})
});

describe("github from getGithub", () => {
    it("Can get github via getGithub()", () => {
        const testEx = "exampleGithub";
        const newEmployee = new Engineer("Tom", 50, "mail@email.com",  testEx);
        expect(newEmployee.getGithub()).toBe(testEx);        
})
});

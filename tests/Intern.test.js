const Intern = require("../lib/Intern");

describe("school", () => {
it("generates school from constructor", () => {
    const testEx = "Boston University";
    const newEmployee = new Intern("Tom", 1, "mail@email.com", testEx);
    expect(newEmployee.school).toBe(testEx);
})
});
describe("getRole", () => {
    it("getsRole() should give result Intern", () => {
        const testEx = "Intern";
        const newEmployee = new Intern("Tom", 50, "mail@email.com",  testEx);
        expect(newEmployee.getRole()).toBe(testEx); 
})
});

describe("school from getSchool", () => {
    it("Caan  get school via getSchool()", () => {
        const testEx = "Boston University";
        const newEmployee = new Intern("Tom", 50, "mail@email.com",  testEx);
        expect(newEmployee.getSchool()).toBe(testEx);        
})
});

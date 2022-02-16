const Manager = require("../lib/Manager");

describe("officeNumber", () => {
it("generates officeNumber from constructor", () => {
    const testEx = "2124";
    const newEmployee = new Manager("Tom", 1, "mail@email.com", testEx);
    expect(newEmployee.officeNumber).toBe(testEx);
})
});
describe("getRole", () => {
    it("getsRole() should give result Manager", () => {
        const testEx = "Manager";
        const newEmployee = new Manager("Tom", 50, "mail@email.com",  testEx);
        expect(newEmployee.getRole()).toBe(testEx); 
})
});

describe("officeNumber from getOfficeNumber", () => {
    it("Can get officeNumber via getOfficeNumber()", () => {
        const testEx = "2124";
        const newEmployee = new Manager("Tom", 50, "mail@email.com",  testEx);
        expect(newEmployee.getRole()).toBe(testEx);        
})
});

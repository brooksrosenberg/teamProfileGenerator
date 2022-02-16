const Employee = require("../lib/Employee");


describe("Employee", () => {
    // testing creatin of Employee
    it("creates Employee input", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });
    
    // testing constructor
    it("generates name from constructor", () => {
        const name = "Tom";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe(name);
    });

    it("generates id from constructor", () => {
        const testEx = 50;
        const newEmployee = new Employee("Tom", testEx);
        expect(newEmployee.id).toBe(testEx);
    });
    it("generates Email from constructor", () => {
        const testEx = "mail@email.com";
        const newEmployee = new Employee("Tom", 1, testEx);
        expect(newEmployee.email).toBe(testEx);
    });
// testing get functions
    describe("getName", () => {
        it("gets name from getName()", () => {
            const testEx = "Tom";
            const newEmployee = new Employee(testEx);
            expect(newEmployee.getName()).toBe(testEx);        
    })
    });
    describe("getId", () => {
        it("gets id from getId()", () => {
            const testEx = 50;
            const newEmployee = new Employee("Tom", testEx);
            expect(newEmployee.getId()).toBe(testEx);        
    })
    });
    describe("getEmail", () => {
        it("gets email from getEmail()", () => {
            const testEx = "mail@email.com";
            const newEmployee = new Employee("Tom", 50, testEx);
            expect(newEmployee.getEmail()).toBe(testEx);        
    })
    });
    describe("getRole", () => {
        it("Role should return Employee", () => {
            const testEx = "Employee";
            const newEmployee = new Employee("Tom", 50, "mail@email.com");
            expect(newEmployee.getRole()).toBe(testEx);        
    })
    });

})
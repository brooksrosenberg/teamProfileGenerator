const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const Employee = require("./Develop/lib/Employee");

describe("Employee", () => {
    it("creates Employee input", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee))toBe("object")
    });


    it("generates name from constructor", () => {
        const name = getName();
        expect(newEmployee.name)toBe(name)
    });

    it("generates id from constructor", () => {
        const id = getId();
        expect(newEmployee.id)toBe(id)
    });
    it("generates Email from constructor", () => {
        const email = getEmail();
        expect(newEmployee.email)toBe(email)
    });

  });

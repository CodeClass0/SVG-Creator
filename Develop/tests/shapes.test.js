const {Circle, Triangle, Square} = require("../lib/shapes");

describe("Circle", () => {
    it("Should return the circle string", () => {
        const shape = new Circle();
        let color = "orange";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`);
        });
});

describe("Triangle", () => {
    it("Should return the triangle string", () => {
        const shape = new Triangle();
        let color = "orange";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`);
        });
});

describe("Square", () => {
    it("Should return the square string", () => {
        const shape = new Square();
        let color = "orange";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"></rect>`);
        });
});
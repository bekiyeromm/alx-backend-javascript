var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullTimeEmployee = fullTimeEmployee;
        this._location = location;
        if (yearsOfExperience !== undefined) {
            this._yearsOfExperience = yearsOfExperience;
        }
    }
    Object.defineProperty(Teacher.prototype, "firstName", {
        // Getter methods
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "fullTimeEmployee", {
        get: function () {
            return this._fullTimeEmployee;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "yearsOfExperience", {
        get: function () {
            return this._yearsOfExperience;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    return Teacher;
}());
// Example usage
var student = new Teacher("bereket", "tena", true, "seatle", 5);
student.contract = true; // Adding a dynamic property
console.log(student);

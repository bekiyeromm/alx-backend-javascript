// main.ts
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
    }
    return Teacher;
}());
var teacher3 = new Teacher('John', 'Doe', false, 'London');
teacher3.contract = false;
console.log(teacher3);

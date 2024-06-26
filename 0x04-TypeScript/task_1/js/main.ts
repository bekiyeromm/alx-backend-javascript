class Teacher {
    private _firstName: string;
    private _lastName: string;
    private _fullTimeEmployee: boolean;
    private _yearsOfExperience?: number;
    private _location: string;
    [key: string]: any; // Allow any additional properties
    
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullTimeEmployee = fullTimeEmployee;
        this._location = location;
        if (yearsOfExperience !== undefined) {
            this._yearsOfExperience = yearsOfExperience;
        }
    }

    // Getter methods
    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get fullTimeEmployee(): boolean {
        return this._fullTimeEmployee;
    }

    get yearsOfExperience(): number | undefined {
        return this._yearsOfExperience;
    }

    get location(): string {
        return this._location;
    }
}
// code for task 2
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0);
    return `${firstInitial}. ${lastName}`;
}
// Example usage

const teacher = new Teacher("bereket", "tena", true, "seatle", 5);

teacher.contract = true; // Adding a dynamic property
console.log(teacher)
//task 2 example usage 
const teacherName: printTeacherFunction = printTeacher;
console.log(teacherName("bereket", "tena"));

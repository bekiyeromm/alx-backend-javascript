class Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [attribute: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }
}

class Directors extends Teacher {
  readonly numberOfReports: number;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number) {
    super(firstName, lastName, fullTimeEmployee, location);
    this.numberOfReports = numberOfReports;
  }
}

const director1: Directors = new Directors('John', 'Doe', true, 'London', 17);
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
}

// Example usage:
const result = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

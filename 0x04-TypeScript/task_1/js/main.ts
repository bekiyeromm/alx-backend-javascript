// main.ts

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

const teacher3: Teacher = new Teacher('John', 'Doe', false, 'London');
teacher3.contract = false;

console.log(teacher3);

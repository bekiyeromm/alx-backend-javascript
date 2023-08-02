interface StudentInterface {
  new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentInterface {
  readonly firstName: string;
  readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1: StudentClass = new StudentClass('John', 'Doe');
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName());    // Output: John

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco',
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  let table = '<table>';
  table += `
    <thead>
      <tr>
        <th>First Name</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
  `;

  studentsList.forEach((student) => {
    table += `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.location}</td>
      </tr>
    `;
  });

  table += '</tbody></table>';

  return table;
}

const htmlTable = renderTable();

console.log(htmlTable); // Output the HTML table
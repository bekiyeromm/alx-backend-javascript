var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'San Francisco'
};
var studentsList = [student1, student2];
function renderTable() {
    var table = '<table>';
    table += "\n    <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Location</th>\n      </tr>\n    </thead>\n    <tbody>\n  ";
    studentsList.forEach(function (student) {
        table += "\n      <tr>\n        <td>" + student.firstName + "</td>\n        <td>" + student.location + "</td>\n      </tr>\n    ";
    });
    table += '</tbody></table>';
    return table;
}
var htmlTable = renderTable();
console.log(renderTable); // Output the HTML table

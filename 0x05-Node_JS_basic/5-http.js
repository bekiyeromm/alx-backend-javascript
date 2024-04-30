const http = require('http');
const fs = require('fs');

const db = process.argv[2] === undefined ? '' : process.argv[2];

const host = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const txt = ['This is the list of our students'];
    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        txt.push('Cannot load the database');
        res.end(txt.join('\n'));
      } else {
        const courses = new Map();
        let students = data.split('\n');
        students = students.slice(1, students.length - 1);

        // Parse CSV data creating a map of courseData objects.
        students.forEach((student) => {
          const studentData = student.split(',');
          const firstName = studentData[0];
          const field = studentData[3];
          if (courses.has(field)) {
            courses.get(field).push(firstName);
          } else {
            courses.set(field, [firstName]);
          }
        });
        // Organize data in an array
        txt.push(`Number of students: ${students.length}`);
        courses.forEach((courseStudents, course) => {
          txt.push(`Number of students in ${course}: ${courseStudents.length}. List: ${courseStudents.join(', ')}`);
        });
      }
      res.end(txt.join('\n'));
    });
  }
});

app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;

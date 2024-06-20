const express = require('express');
const fs = require('fs');

const PORT = 1245;
const nameFile = process.argv.length > 2 ? process.argv[2] : '';

const app = express();

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    let count = 0;
    const students = {};
    const response = [];
    if (data) {
      const content = data.trim().split('\n');

      for (const lines of content.slice(1)) {
        count += 1;

        const line = lines.split(',');
        const field = line[line.length - 1];

        if (!Object.keys(students).includes(field)) {
          students[field] = [line[0]];
        } else {
          students[field].push(line[0]);
        }
      }
    }
    response.push(`Number of students: ${count}`);
    for (const [field, value] of Object.entries(students)) {
      response.push(
        `Number of students in ${field}: ${value.length}. List: ${value.join(
          ', ',
        )}`,
      );
    }
    resolve(response.join('\n'));
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  res.appendHeader('Content-Type', 'text/plain');
  countStudents(nameFile)
    .then((response) => {
      const content = `This is the list of our students\n${response}`;
      res.appendHeader('Content-Length', content.length);
      res.send(content);
    })
    .catch((err) => {
      const content = `This is the list of our students\n${err.message}`;
      res.appendHeader('Content-Length', content.length);
      res.send(content);
    });
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:1245/');
});

module.exports = app;

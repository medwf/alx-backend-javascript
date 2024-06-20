const { createServer } = require('http');
const fs = require('fs');

const nameFile = process.argv.length > 2 ? process.argv[2] : '';
const HOST = 'localhost';
const PORT = 1245;

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

// create Server.
const app = createServer();

app.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');

  if (req.url === '/') {
    const content = 'Hello Holberton School!';

    res.setHeader('Content-Length', content.length);
    res.write(content);
  }

  if (req.url === '/students') {
    let content = 'This is the list of our students\n';
    countStudents(nameFile)
      .then((report) => {
        content += report;
        res.setHeader('Content-Length', content.length);
        res.write(content);
      })
      .catch((err) => {
        content += err.message;
        res.setHeader('Content-Length', content.length);
        res.write(content);
      });
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});
module.exports = app;

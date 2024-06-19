const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    let count = 0;
    const students = {};
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
    console.log(`Number of students: ${count}`);
    for (const [field, value] of Object.entries(students)) {
      console.log(
        `Number of students in ${field}: ${value.length}. List: ${value.join(
          ', ',
        )}`,
      );
    }
    resolve(true);
  });
});

module.exports = countStudents;

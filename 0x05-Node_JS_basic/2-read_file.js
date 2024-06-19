const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const content = fs.readFileSync(path, 'utf-8').trim().split('\n');
  const students = {};
  let count = 0;

  for (const lines of content.slice(1)) {
    count += 1;
    // const line = element.split(",");
    // console.log(lines);
    const line = lines.split(',');
    const field = line[line.length - 1];

    if (!Object.keys(students).includes(field)) {
      students[field] = [line[0]];
    } else {
      students[field].push(line[0]);
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
}

module.exports = countStudents;

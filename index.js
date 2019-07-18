const mongoose = require('mongoose');
const table = require('table');
mongoose.connect('mongodb://localhost:27017/zeta', { useNewUrlParser: true });

const Students = mongoose.model('students', { name: String });

/* const jozsi = new Students({ name: 'Jozsef' });
jozsi.save(); */

const main = async () => {
  const jozsi = new Students({ name: 'Jozsef' });
  await jozsi.save();
  const students = await Students.find();
  const toTable = students.map(student => [student.name]);
  console.log(table.table(toTable));
  mongoose.disconnect();
};

main();

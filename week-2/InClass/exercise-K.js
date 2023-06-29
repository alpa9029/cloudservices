console.log("Hello World!")
const students = [
    "Alessandra",
    "JP",
    "Ranin",
    "Abby",
    "Glaucia",
    "Carolina",
    "Pedro",
  ];
  function getstudentsnames(students) {
    for (let i = 0; i < students.length; i++) {
        const studentname = "Student name is: " + students[i];
        const indexMessage = "index is: " + i;
        console.log(indexMessage, studentname);
      }
  }
  console.log(getstudentsnames(students))
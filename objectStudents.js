const getRandInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.idCount = 1;
    this.departments = [
      "Bio-Engineering and Mechanics",
      "Data Science and Analytics",
      "Computer Science and Theory",
      "Blockchain Development and Cryptocurrency",
      "Oncology and Pediatrics",
      "Cardiothoracic Surgery",
    ];
  }

  // To admit new students
  admitStudent() {
    let studentName = prompt("Enter student name");
    let studentAge = Number(prompt("Enter student age"));
    let studentId = this.idCount;
    let studentDepartment =
      this.departments[getRandInteger(0, this.departments.length - 1)];

    this.students.push({
      name: studentName,
      age: studentAge,
      id: studentId,
      department: studentDepartment,
      displayName: function () {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Matric No: ${this.id}`);
        console.log(`Department: ${this.department}`);
      },
    });

    this.idCount++;
  }

  // Fetch student in admitted list by matriculation number
  getStudentByMatric() {
    let found = false;
    let studentFind = Number(prompt("Enter student ID to fetch"));

    this.students.forEach((student) => {
      if (studentFind === student.id) {
        console.log("Student found!");
        student.displayName();
      }
    });

    if (!found) {
      console.log(
        `No student with matriculation number ${studentFind} was found.\n`
      );
    }
  }

  // To display all students and their info
  displayStudents() {
    console.log(`Welcome to ${this.name}.`);
    for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      student.displayName();
    }
    console.log("\n");
  }

  // Rusticate student
  rusticateStudent() {
    let found = false
    let studentRusticate = prompt("Enter student ID to rusticate")
    for (let index = 0; index < this.students.length; index++) {
      if ( studentRusticate === this.students[index].id ) {
        found = true
        this.students.slice(index, 1)
      }
      
    }

    if (!found) {
      console.log(`Student with ID of ${studentRusticate} was not found.`);
    }
  }
}

const covenant = new School("Covenant University");
covenant.admitStudent();
covenant.admitStudent();
covenant.displayStudents();

covenant.rusticateStudent()
covenant.displayStudents()

/*

    Make the list students private. Right now, anyone can gain access to it and manipulate it.

    Make the constraint for allowed values for years a private variable. As a private variable it avoids an unnecessary
     statement in the addStudent method and at the same time makes the code more declarative.

    Make the getCourse function accessible in the addGrade method also. As it is, only the courseReport method has access.

*/
const school = (() => {
  const students = [];
  const allowedYears = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }


  return {
    addStudent(name, year) {
      let newStudent;
      if (allowedYears.includes(year)) {
        newStudent = createStudent(name, year);
      } else {
        return 'Invalid Year';
      }
      students.push(newStudent);
      return newStudent;
    },
    enrollStudent(student, course) {
      student.addCourse(course);
      return course;
    },
    addGrade(student, grade, course) {
      student.courses.forEach((object) => {
        if (object['name'] === course) {
          object['grade'] = grade;
          return object;
        }
      });
    },
    getReportCard(student) {
      student.courses.forEach((object) => {
        let grade = object.grade ? object.grade : 'In progress';
        console.log(object.name + ": " + grade);
      });
    },
    courseReport(course) {
      console.log('=' + course + ' grades' + '=');
      let gradesArray = [];
      this.students.forEach((student) => {
        student.courses.forEach((object) => {
          if (object.name === course && object.grade) {
            console.log(student.name + ": " + object.grade);
            gradesArray.push(object.grade);
          }
        });
      });
      let average = gradesArray.reduce((sum, elem) => sum += elem, 0) / gradesArray.length;
      console.log('--');
      console.log('Average: ' + average);
    },
  };
})();

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(this.name + " is a " + this.year + " student.")
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    addNote(code, note) {
      this.courses.forEach((course) => {
        if (course.code === code && !course['note']) {
          course['note'] = [note];
        } else if (course.code === code) {
          course['note'].push(note);
        }
      });
    },
    updateNote(code, note) {
      this.courses.forEach((course) => {
        if (course.code === code) {
          course['note'] = [note];
        }
      });
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(course.name + ": " + course.note.join('; '))
        }
      });
    },
  }
}

let foo = school.addStudent('foo', '3rd');
/*
Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student.
 Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

    addStudent: Adds a student by creating a new student and adding the student to a collection of students.
    The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
    Returns a student object if year is valid otherwise it logs "Invalid Year".
    enrollStudent: Enrolls a student in a course.
    addGrade: Adds the grade of a student for a course.
    getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
    courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three student objects, produce the following
 values from the getReportCard and courseReport methods respectively.
*/

let school = {
  students: [],
  addStudent(name, year) {
    const YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
    let newStudent;
    if (YEARS.includes(year)) {
      newStudent = createStudent(name, year);
    } else {
      return 'Invalid Year';
    }
    this.students.push(newStudent);
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
// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let foo = school.addStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95, });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
foo.addCourse({ name: 'Physics', code: 202, });


let bar = school.addStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101, grade: 91, });


let qux = school.addStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101, grade: 93, });
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });


school.getReportCard(foo);
// // = Math: 95
// // = Advanced Math: 90
// // = Physics: In progress

school.courseReport('Math');
// // = =Math Grades=
// // = foo: 95
// // = bar: 91
// // = qux: 93
// // = ---
// // = Course Average: 93

school.courseReport('Advanced Math');
// // = =Advanced Math Grades=
// // = foo: 90
// // = qux: 90
// // = ---
// // = Course Average: 90

school.courseReport('Physics');
// // = undefined

import { Student } from './student.js';
import { Course } from './Course.js';

const student1 = new Student("Sandra");
const student2 = new Student("Torsten");
const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);

student1.registerCourse(course1); 
student1.registerCourse(course2);
student2.registerCourse(course1);
student2.registerCourse(course2);

console.log("Student 1 courses:");
student1.listCourses();
console.log("Student 2 courses:");
student2.listCourses();

console.log("Course 1 info:");
course1.getCourseInfo();
console.log("Course 2 info:");
course2.getCourseInfo();

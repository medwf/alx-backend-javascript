interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const StudentOne: Student = {
    firstName: "Student_1",
    lastName: "alx",
    age: 20,
    location: "casa"
} 

const StudentTwo: Student = {
    firstName: "Student_2",
    lastName: "alx",
    age: 21,
    location: "casa"
}

// there is two way to declare Array of Student.
const studentsList: Student[] = [StudentOne, StudentTwo];
// const studentsList: Array<Student> = [s1, s2]; 

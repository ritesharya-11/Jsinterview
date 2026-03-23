// map. filter and reduce - O/P 
// question-1 Return only name of student in capital
// Question2 - return only detail of whonscored more than 60 marks

// Question3- more than 60 marks and roll number greater than 15

// Question4 - Sum of marks of all students

//  Question5- return only names of student who scored more than 60
// Question6- Return total marks for students with marks greater than 60 after 20 marks have been
//                   added to those student less than 60

let students = [
    { name: "ritesh",   rollnumber: 31, marks: 40 },
    { name: "jeny",     rollnumber: 47, marks: 75 },  // ✅ added marks value
    { name: "kaushal",  rollnumber: 45, marks: 90 },  // ✅ added marks value
    { name: "kapoor",   rollnumber: 23, marks: 65 }   // ✅ fixed maeks → marks
];

// const names = students.map((stu) => stu.name.toUpperCase());

// console.log(names);

// const details  = students.filter((stu) => stu.marks > 60);

// console.log(details);

// const detail = students.filter((stu) => stu.marks>60 && stu. rollnumber>15)

// console.log(detail);

// const sum = students.reduce((acc,curr)=>acc+curr.marks,0)

// console.log(sum);

// const names = students.filter((stu) =>stu.marks > 60).map((stu)=>stu.name);
// console.log(names);

const totalMarks = students.map((stu) =>{
    if(stu.marks < 60){
        stu.marks += 20;
    }
    return stu;
}).filter(stu=>stu.marks >60)

console.log(totalMarks);

 


const students = [
    { name: 'Markku', score: 99 },
    { name: 'Karoliina', score: 58 },
    { name: 'Susanna', score: 69 },
    { name: 'Benjamin', score: 77 },
    { name: 'Isak', score: 49 },
    { name: 'Liisa', score: 89 },
]

//find the highest scoring student
const highest = (students) => {
    let bestStudent = students[0];
    students.map((student) => {
        if (student.score > bestStudent.score) {
            bestStudent = student;
        }
    });
    return bestStudent;
}
console.log("Highest score student: ");
console.log(highest(students));


//find the lowest scoring student
const lowest = (students) => {
    let worstStudent = students[0];
    students.map((student) => {
        if (student.score < worstStudent.score) {
            worstStudent = student;
        }
    });
    return worstStudent;
}
console.log("Lowest score student: ");
console.log(lowest(students));


//find the average score of the students
const average = (students) => {
    let sum = students.reduce((acc, cur) => acc + cur.score, 0);
    return sum / students.length;
}
console.log("Average is: ");
console.log(average(students));

//higher than average 
const overAverage = (students) => {
    students.map((student) => {
        if (student.score > average(students)) {
            console.log(student);
        }
    });
}
console.log("Students who scored more than average: ");
overAverage(students);

 
//Assign grades (1-5) to all students based on their scores 
//"1": "1-39", "2": "40-59", "3": "60-79", "4": "80-94", "5": "95-100"
const grade = (students) => {
    
    students.map((student) => {
        let score = student.score;

        switch (true) {
            case 1 <= score && score <= 39:
                student.grade = 1;
                break;
            case 39 < score && score <= 59:
                student.grade = 2;
                break;
            case 59 < score && score <= 79:
                student.grade = 3;
                break;
            case 79 < score && score <= 94:
                student.grade = 4;
                break;
            case 94 < score && score <= 100:
                student.grade = 5;
                break;
        }
    });
}
grade(students);
console.log(students);

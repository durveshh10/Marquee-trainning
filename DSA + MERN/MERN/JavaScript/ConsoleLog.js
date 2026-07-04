let students = ["Yash", "Rupesh", "Dipesh", "Nitesh"];
for (let student of students) {
    console.log(student.toUpperCase());
}
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student} is sleeping in class`);
});
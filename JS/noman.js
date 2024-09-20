class student {

    constructor(id, name, cgpa) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }
}
function PrintName() {
    const student = []

    const numberOfStudents = parseInt(prompt("Enter the number of students: "));
    for (let i = 0; i < numberOfStudents; i++) {
        console.log(`\nEnter details for student ${i + 1}:`);
        const id = prompt("Enter ID: ");
        const name = prompt("Enter Name: ");
        const cgpa = parseFloat(prompt("Enter CGPA: "));


        student.push(new Students(id, name, cgpa));
    }
    console.log("\nStudents with CGPA greater than 2.5:");
    student.forEach(student => {
        if (student.cgpa > 2.5) {
            console.log(`ID: ${student.id}, Name: ${student.name}, CGPA: ${student.cgpa}`);
        }
    });


}
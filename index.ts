class Student {
    public name: string;
    private grade: number;
    readonly studentId: string;

    constructor(name: string, grade: number, studentId: string) {
        this.name = name;
        this.grade = grade;
        this.studentId = studentId;
    }

    getGrade() : number {
        return this.grade;
    }
}

const student = new Student("yash", 80, "s-001");
console.log(student.name);
console.log(student.getGrade());
// console.log(student.grade);
console.log(student.studentId);
// 1. Standard Function with Typed Parameters, Default Parameters, and Return Type
function calculateFinalGrade (
    assignmentScore : number, 
    examScore : number,
    bonus : number = 0  // Default parameter (falls back to 0 if not provided)
) : number {
    return assignmentScore * 0.4 + examScore * 0.6 + bonus;
}


// 2. Optional Parameters (?)
// Notice `remark` is optional. If omitted, its value is `undefined`.
function logGradeReport(studentName: string, grade: number, remark?: string): void {
    console.log(`Student: ${studentName}, Grade: ${grade}`);
    if (remark) {
        console.log(`Remark: ${remark}`);
    }
}


// 3. `void` Return Type
// Used when a function does not return a value (performs an action instead)
function printHeader(title: string): void {
    console.log("====================");
    console.log(title.toUpperCase());
    console.log("====================");
}


// 4. Arrow Functions with Explicit Return Types
const isPassing = (grade: number): boolean => {
    return grade >= 60;
};

// Arrow function with concise body and implicit return (no curly braces needed)
const isPassingImplicit = (grade: number): boolean => grade >= 60;


// 5. Rest Parameters (Handling multiple arguments as an array - Interview Favorite!)
function calculateAverage(...scores: number[]): number {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

// Example calls
let finalScore = calculateFinalGrade(85, 90); // Uses default bonus = 0
logGradeReport("Shashidhar", 88, "Great job!"); // Uses optional parameter
let avg = calculateAverage(90, 80, 85, 95);
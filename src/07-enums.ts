// 1. Union Types as a lightweight alternative to Enums
type courseCompletionStatus = "full" | "partial" | "not completed";


// 2. Numeric Enums (Default behavior)
// By default, Beginner = 0, Intermediate = 1, Expert = 2
enum UserRole {
    Admin,    // 0
    Editor,   // 1
    Subscriber // 2
}

let role: UserRole = UserRole.Admin;
console.log(role); // Outputs: 0


// 3. String Enums (Recommended for readability and debugging)
enum Difficulty {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Expert = "Expert"
}

let level: Difficulty = Difficulty.Intermediate; 
console.log(level); // Outputs: "Intermediate"


// 4. PERFORMANCE TIP (Senior Interviewer Favorite): `const enum`
// Standard enums create an object in the compiled JavaScript output.
// Adding `const` removes the object completely and replaces values inline for better performance.
const enum LogLevel {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}

let currentLog = LogLevel.Info; // Compiles directly to "INFO" in plain JS
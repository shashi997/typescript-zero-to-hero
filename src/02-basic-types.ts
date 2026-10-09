// 1. Primitive Type Inference & Annotations
let username = "Shashidhar";    // inferred as a string
let age = 27;   // inferred as a number
let isStudent = false;  // inferred as a boolean

age = 23;

// Explicit type annotation (good when declaring before assignment)
let studentCount : number;
studentCount = 42;

// you can also chain multiple types with union
// Union Types: allowing multiple possible types, which allowed the variable to be either string or it's allowed to be null.
let selectedCourse : string | null = null;
selectedCourse = "TypeScript Zero to Hero";

// 2. Arrays
let scores : number[] = [];
scores = [24, 32, 45, 65, 12];  // for this variable it has to be array of multiple numbers, it cannot be array of multiple strings or other types.

// Tuples: Fixed-length, fixed-type arrays (Interview favorite!)
let userRecord: [string, number, boolean] = ["Shashidhar", 27, false];


// 3. Literal Types: const narrows the type to the exact value
const defaultTheme = "dark"; // Type is literally "dark", not just string
let currentTheme = "light";    // Type is string


// unknown and any are 2 special types that can hold any value in typescript. 
// However, Unknown is recommended over any because it offers type checking whenever we try to use the variable.
// these below is inferred as any type - this array will allow to have values of mixed or multiple data types.
let ant = [];
ant = [21, "hello", null];


// 4. Avoiding `any` — The `unknown` Type
// `any` turns off type safety. `unknown` forces you to verify the type first.
let flexibleInput: unknown = "Could be anything";

if (typeof flexibleInput === "string") {
    console.log(flexibleInput.toUpperCase()); // Safe because we checked!
}

// This is useful for APIs that want to signal “this can be any value, so you must perform some type of checking before you use it”. 
// This forces users to safely introspect returned values.
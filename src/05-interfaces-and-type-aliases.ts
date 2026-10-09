// ==========================================
// 1. INTERFACES
// ==========================================
interface Course {
    title: string,
    durationWeeks: number,
    isPublished?: boolean,  // Optional property
}

// Using the Interface
let course : Course = {
    title: "typescript course",
    durationWeeks: 2,
    isPublished: true,
    instructor: "ash"   // Required because declaration merging affects the whole scope
}

let course1 : Course = {
    title: "typescript course",
    durationWeeks: 2,
    // isPublished: true,
    instructor: "ash"
}

// this is much more efficient , all of these object courses using the Course interface instead of manually giving individually.
// and also if using ? in any field in interface it can become optional.

// INTERVIEW FEATURE: Declaration Merging
// TypeScript allows you to re-open an interface and add new properties. 
// Type aliases cannot do this!
interface Course {
    instructor: string; // Now every Course object must include this
}

let course2 : Course = {
    title: "typescript course",
    durationWeeks: 2,
    isPublished: true,
    instructor: "ash"   // Required because of declaration merging
}

// now all the objects using these interface also need to implement instructor, which is of string data type.
// only when they do so, they satisfy the structure and type of this interface that they are implementing.

// NOTE FOR INTERVIEWS: TypeScript interfaces undergo "declaration merging". 
// Even though the second `interface Course` is written *below*, TypeScript merges 
// them globally across the scope, meaning `instructor` becomes required on ALL 
// Course objects in this file, even those declared above it!


// Interfaces can also extend other interfaces
interface VideoCourse extends Course {
    videoPlatform: string; // Adds new fields to Course
}


// ==========================================
// 2. TYPE ALIASES
// ==========================================

// Type aliases use the `type` keyword. They can also define object shapes.
type UserProfile = {
    username: string;
    email: string;
};

let user: UserProfile = {
    username: "shashi",
    email: "shashi@example.com",
};

// Types can do things Interfaces CANNOT do:
// 1. Union Types (Primitives)
type Status = "pending" | "approved" | "rejected";
let currentStatus: Status = "approved";

// 2. Tuples
type Coordinates = [number, number];
let point: Coordinates = [10.5, 20.1];

// 3. Intersections (Combining types using `&`)
type Admin = UserProfile & {
    permissions: string[];
};

// ==========================================
// 3. INTERVIEW CHEAT SHEET: Interface vs Type
// ==========================================
/*
  - **Interface**: 
    - Best for defining object shapes and building libraries/classes.
    - Supports **Declaration Merging** (automatically combines multiple interfaces with the same name).
    - Uses `extends` for inheritance.
  - **Type Alias**: 
    - More flexible (can represent primitives, unions, tuples, and intersections).
    - Cannot be redeclared/merged (throws an error if duplicated).
    - Uses `&` (intersection) for combining.
*/
// 1. Basic Typed Arrays
let studentNames : string[] = ["simon", "jack", "justin"];
let quizScores : number[] = [34, 24, 25];

// 2. Tuples (Fixed-length, fixed-type arrays)
let studentRecords : [string, number] = ["Jason", 65];


// 3. Object Shapes (Inline Typing)
// Structural safety ensures you don't miss or misspell keys.
let course : {
    title : string,
    durationWeeks : number,
    isPublished : boolean
} = {
    title : "The Science of Memory and the Art of Forgetting",
    durationWeeks: 12,
    isPublished: true,
}

// 4. Optional Object Properties (?)
// Use `?` when a property is not mandatory
let userProfile: {
    username: string;
    email: string;
    bio?: string; // Optional property (can be string or undefined)
} = {
    username: "Arvind",
    email: "arvind123@gmail.com",
    // bio is omitted, and TypeScript won't complain!
};


// 5. Readonly Properties (Interview Favorite!)
// Prevents properties from being modified after the object is created.
let configuration: {
    readonly apiKey: string;
    timeout: number;
} = {
    apiKey: "xyz-123-secret",
    timeout: 5000,
};

// configuration.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
configuration.timeout = 10000; // Allowed because it's not readonly


// 6. Array of Objects (Extremely common in real-world apps)
let students: { id: number; name: string; grade: number }[] = [
    { id: 1, name: "Alice", grade: 92 },
    { id: 2, name: "Bob", grade: 85 },
];
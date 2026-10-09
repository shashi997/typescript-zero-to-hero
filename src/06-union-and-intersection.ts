// ==========================================
// 1. UNION TYPES (|)
// ==========================================
type CourseStatus = "pending" | "active" | "completed";

// if later on we create a variable of this type, that variable is only allowed to hold one of these 3 values.

let computerCourseCompletion : CourseStatus = "pending";
computerCourseCompletion = "active";
computerCourseCompletion = "completed";

// if you do stuff like comparing etc.. this below, you can always make sure you don't a mistake in spelling, capitalization so you don't get any 
// hidden bugs or errors
if (computerCourseCompletion == "completed") {
    // TypeScript knows it's "completed" here
}


// with this the function can handle lookups for a number & string while also being type safe against null.
// Function using Union Types
function findCourseByID (id: number | string) {
    console.log(`Looking for course ${id}`)

    // INTERVIEW FAVORITE: Type Narrowing / Type Guarding
    // Since `id` can be a number or string, you must check the type before using string/number methods:
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // Safe because TypeScript narrowed it to string!
    } else {
        console.log(id.toFixed(2));    // Safe because TypeScript narrowed it to number!
    }
}

findCourseByID(12);
findCourseByID("bok");

// ==========================================
// 2. INTERSECTION TYPES (&)
// ==========================================
interface CourseBasicInfo {
    title : string,
    durationWeeks: number,
}

interface CoursePricing {
    price: number,
    currency: string,
}

// Combining two interfaces into a new type using intersection (&)
// This lets you keep CourseBasicInfo and CoursePricing separate while creating a combined type.
type FullCourseDetails = CourseBasicInfo & CoursePricing;

// so if we use the FullCourseDetails type to implement object we would have to give all 4 values.
const fullCourse : FullCourseDetails = {
    title: "",
    durationWeeks: 1,
    price: 0,
    currency: "INR"
}

// while doing this we also still retain the ability to use the above 2 interfaces and implement.
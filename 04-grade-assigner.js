// Prompt the user for a score
let score = parseInt(prompt("Enter a number between 1 and 100:"));

// Check if the score is within the valid range
if (score < 1 || score > 100 || isNaN(score)) {
    console.log("Invalid input. Please enter a number between 1 and 100.");
} else {
    // Assign grade based on the score
    if (score >= 90) {
        console.log("You received an A");
    } else if (score >= 80) {
        console.log("You received a B");
    } else if (score >= 70) {
        console.log("You received a C");
    } else if (score >= 60) {
        console.log("You received a D");
    } else {
        console.log("You received an F");
    }
}
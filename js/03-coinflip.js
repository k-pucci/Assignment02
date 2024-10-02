// Generate a random number for the coin flip
let coinFlip = Math.round(Math.random());

// Prompt the user for their choice
let choice = prompt("Heads or Tails?").toLowerCase();

// Determine the result of the flip
let result = coinFlip < 0.5 ? "heads" : "tails";

// Check the result and user's choice
if (result === "heads" && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (result === "heads" && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (result === "tails" && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (result === "tails" && choice === "tails") {
    alert("The flip was tails and you chose tails...you win!");
} else {
    alert("Invalid choice. Please enter 'heads' or 'tails'.");
}

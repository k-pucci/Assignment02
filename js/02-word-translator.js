// Prompt the user for a language code
let languageCode = prompt("Enter a language code (es, de, en, or fr):").toLowerCase();

// Translate "Hello World" based on the language code
let translation;
switch (languageCode) {
    case "es":
        translation = "Hola Mundo";
        break;
    case "de":
        translation = "Hallo Welt";
        break;
    case "fr":
        translation = "Bonjour le monde";
        break;
    default:
        languageCode = "en";
        translation = "Hello World";
}

// Display the result
console.log(`Hello World translated in ${languageCode.toUpperCase()} is: ${translation}`);

/*

// LESSON 1: INTRODUCTION TO JAVASCRIPT LANGUAGE
console.log("Hello, welcome to JavaScript programming!");

let userName = prompt("enter your name:", "ghost");

if (userName !== null && userName !== "") {
    console.log("Hello, " + userName + "!");
    alert("Hello, " + userName + "!"); // Displays a browser alert
} else {
    console.log("wrong name value");
    alert("You didn't enter a valid name.");
}


// LESSON 2: VARIABLES, EXPRESSIONS AND CONDITIONAL STATEMENTS

// Create variables that store numbers, text, and boolean values
const pi = "3.14159";             // pi variable (constant)

let isStudent = confirm("Are you a student?");

if (isStudent) {

    console.log("Hello, " + userName + "! You are a student.");
    alert("Hello, " + userName + "! You are a student.");

    let geometricFigure = prompt("enter geometric figure (cylinder, cone, sphere):", "cylinder");    
    
    if (geometricFigure !== null && geometricFigure !== "") {

        switch (geometricFigure) {
            case "cylinder":
                console.log("As a student, you could calculate cylinder area and volume: ");
                alert("As a student, you could calculate the cylinder area and volume: ");

                const imgSrc = "./img/cilindro.png";
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = "Formulas de área y volumen de un cilindro";
                // add image to body
                document.body.appendChild(img);

                // Use setTimeout to allow the image to render before blocking with prompt
                setTimeout(function() {
                    let radius = parseFloat(prompt("Enter the radius of the cylinder:"));
                    let height = parseFloat(prompt("Enter the height of the cylinder:"));
                    
                    let area = 2 * pi * radius * (radius + height);
                    let volume = pi * radius ** 2 * height;
                    
                    console.log("The area of the cylinder is: " + area.toFixed(2));
                    console.log("The volume of the cylinder is: " + volume.toFixed(2));
                    alert("The area of the cylinder is: " + area.toFixed(2));
                    alert("The volume of the cylinder is: " + volume.toFixed(2));

                    // Remove the image after the calculation is done
                    img.remove();
                    
                    // alert("Good bye.");
                }, 100);

                break;

            case "cone":
                console.log("As a student, you could calculate cone area and volume: ");
                alert("As a student, you could calculate the cone area and volume: ");
                break;

            case "sphere":
                console.log("As a student, you could calculate sphere area and volume: ");
                alert("As a student, you could calculate the sphere area and volume: ");
                break;
            default:
                console.log("wrong geometric figure value");
                alert("You didn't enter a valid geometric figure.");
                break;
        }
    }

} else {
    console.log("you are not an student, good bye");
    alert("You are not an student, good bye.");
}

*/

// LESSON 3: ARRAYS AND LOOPS

// 1. Create an array of PC components (Strings)
let pcComponents = ["Motherboard", "RAM 16GB", "SSD 1TB", "Power Supply"];
console.log("Initial Cart:", pcComponents);
alert("Your PC Cart: " + pcComponents.join(", "));

// 2. Array Methods (push, pop, unshift, slice)

// push: Add the Graphics Card 
let graphicCard = prompt("enter your graphic card:", "RTX 4070 GPU");
pcComponents.push(graphicCard);
console.log("Added GPU (push):", pcComponents);

// unshift: Add the CPU (prioritize first!)
let cpu = prompt("enter your cpu:", "Intel Core i7 CPU");
pcComponents.unshift(cpu);
console.log("Added CPU to top (unshift):", pcComponents);

// pop: remove the last item added 
let removedComponent = pcComponents.pop();
console.log(`Budget tight! Removed: ${removedComponent} (pop)`);
console.log("Current Cart:", pcComponents);

// slice first 3 items
let coreBundle = pcComponents.slice(0, 3);
console.log("Core Bundle (CPU, Mobo, RAM):", coreBundle);


// 3. Loops (for, while, do-while)

// 'for' loop: Calculating Total Price (by prompt)
let componentPrices = []; // empty array
let totalPrice = 0;

console.log("--- Calculating Total Cost (for loop) ---");

// foreach loop 
pcComponents.forEach(function(component) {
    // code to be executed for each element
    let price = prompt("Enter the price of the " + component + ":");
    componentPrices.push(price);
    console.log("Component: " + component + " Price: " + price);
    totalPrice += parseFloat(price);
});

console.log(`Total Estimated Cost: $${totalPrice}`);
alert(`Total Estimated Cost: $${totalPrice}`);

// while price is less than 1000, add device
while (totalPrice < 1000) {
    // push: Add device
    let device = prompt("enter your device:", "device");
    pcComponents.push(device);
    console.log("Added device (push):", pcComponents);
    let price = prompt("Enter the price of the " + device + ":");
    componentPrices.push(price);
    console.log("Component: " + device + " Price: " + price);
    totalPrice += parseFloat(price);
    console.log(`Total Estimated Cost: $${totalPrice}`);
    alert(`Total Estimated Cost: $${totalPrice}`);
}

let expensiveDevice = "";
let expensiveDevicePrice = 0;

// Find the most expensive component
for (let i = 0; i < pcComponents.length; i++) {
    let currentPrice = parseFloat(componentPrices[i]);
    
    if (currentPrice > expensiveDevicePrice) {
        expensiveDevicePrice = currentPrice;
        expensiveDevice = pcComponents[i];
    }
}

let expensive = "Most expensive device: " + expensiveDevice + " price: $" + expensiveDevicePrice;
console.log(expensive);
alert(expensive);


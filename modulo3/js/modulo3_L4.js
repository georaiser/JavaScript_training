// LESSON 4: JAVASCRIPT FUNCTIONS

const PI = 3.14159; // pi variable (constant)

// ===== CYLINDER CALCULATIONS =====

// Function to calculate cylinder surface area
// Formula: 2 * π * r * (r + h)
function calculateCylinderArea(radius, height) {
    if (radius <= 0 || height <= 0) {
        return "Error: Radius and height must be positive numbers";
    }
    let area = 2 * PI * radius * (radius + height);
    
    // Display results
    alert(`Cylinder Results:\nSurface Area: ${area.toFixed(2)}`);

    return area;
}

// Function to calculate cylinder volume
// Formula: π * r² * h
function calculateCylinderVolume(radius, height) {
    if (radius <= 0 || height <= 0) {
        return "Error: Radius and height must be positive numbers";
    }
    let volume = PI * radius ** 2 * height;
    alert(`Cylinder Results:\nVolume: ${volume.toFixed(2)}`);

    return volume;
}

// Arrow function for cone volume (π * r² * h / 3)
const calculateConeVolume = (radius, height) => {
    if (radius <= 0 || height <= 0) return "Error: Invalid dimensions";
    let volume = (PI * radius ** 2 * height) / 3;
    alert(`Cone Results:\nVolume: ${volume.toFixed(2)}`);
    return volume;
};

// Arrow function for sphere volume (4/3 * π * r³)
const calculateSphereVolume = (radius) => {
    if (radius <= 0) return "Error: Invalid radius";
    let volume = (4 / 3) * PI * radius ** 3;
    alert(`Sphere Results:\nVolume: ${volume.toFixed(2)}`);
    return volume;
};

// Arrow function for sphere surface area (4 * π * r²)
const calculateSphereArea = (radius) => {
    if (radius <= 0) return "Error: Invalid radius";
    let area = 4 * PI * radius ** 2;
    alert(`Sphere Results:\nSurface Area: ${area.toFixed(2)}`);
    return area;
};


// ===== GET DIMENSIONS =====

function getDimensions() {
    console.log("=== Geometric Figure Dimensions ===");
    
    // Get user input via prompts
    let radius = parseFloat(prompt("Enter the radius of the geometric figure:"));
    let height = parseFloat(prompt("Enter the height of the geometric figure:"));
    
    // Validate input
    if (isNaN(radius) || isNaN(height)) {
        alert("Error: Please enter valid numbers");
        console.log("Error: Invalid input");
        return;
    }
    
    return {radius, height};
}

// Execute function and store the result in variables
let {radius, height} = getDimensions();
alert("radius: " + radius + ", height: " + height);



// ===== CALCULATIONS =====

console.log("\n--- Testing Geometric Functions ---");

// Test with prompt values

console.log("Area:", calculateCylinderArea(radius, height).toFixed(2));
console.log("Volume:", calculateCylinderVolume(radius, height).toFixed(2));

console.log("Volume:", calculateConeVolume(radius, height).toFixed(2));

console.log("Area:", calculateSphereArea(radius).toFixed(2));
console.log("Volume:", calculateSphereVolume(radius).toFixed(2));
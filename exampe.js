// Prompt the user for three numbers
const num1 = prompt("Enter the first number: ");
const num2 = prompt("Enter the second number: ");
const num3 = prompt("Enter the third number: ");

// Convert the input values to integers
const num1Int = parseInt(num1);
const num2Int = parseInt(num2);
const num3Int = parseInt(num3);

// Check if all inputs are valid numbers
if (!isNaN(num1Int) && !isNaN(num2Int) && !isNaN(num3Int)) {
    // Calculate the sum, product, and average
    const sum = num1Int + num2Int + num3Int;
    const product = num1Int * num2Int * num3Int;
    const average = sum / 3;

    // Display the results on the webpage
    document.querySelector("#sum").innerHTML = `Sum: ${sum}`;
    document.querySelector("#product").innerHTML = `Product: ${product}`;
    document.querySelector("#average").innerHTML = `Average: ${average.toFixed(2)}`; // Rounded to 2 decimal places
} else {
    // Display an error message if any input is invalid
    document.querySelector("#sum").innerHTML = "Please enter valid numbers!";
    document.querySelector("#product").innerHTML = "";
    document.querySelector("#average").innerHTML = "";
}


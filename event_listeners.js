// Handle the form submission
document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the input value
    const userInput = document.getElementById('userInput').value;

    // Display the result on the page
    document.getElementById('result').innerText = parse(userInput);
    document.getElementById('result').style.display = 'block';
});

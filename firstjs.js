document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to form submission
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
    });

    // Additional JavaScript functionalities can be added here
});
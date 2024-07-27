document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Clear form fields
    this.reset();
    // Display popup message
    alert('Thank you for your submission. We will get back to you as soon as possible.');
});
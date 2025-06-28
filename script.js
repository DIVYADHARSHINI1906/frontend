// Get references to HTML elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

/**
 * Displays a message to the user within the designated message area.
 * It also applies appropriate styling based on the message type (success or error).
 * @param {string} text - The message text to be displayed.
 * @param {string} type - The type of message, either 'success' or 'error'.
 */
function displayMessage(text, type) {
    messageDiv.textContent = text;
    // Remove all previous styling classes to ensure a clean slate
    messageDiv.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');

    // Apply specific classes based on message type for visual feedback
    if (type === 'error') {
        messageDiv.classList.add('bg-red-100', 'text-red-700');
    } else if (type === 'success') {
        messageDiv.classList.add('bg-green-100', 'text-green-700');
    } else {
        // Default styling for 'info' or other types if needed (e.g., a neutral background)
        // For 'info', you might add classes like 'bg-blue-100', 'text-blue-700'
    }
    messageDiv.classList.remove('hidden'); // Ensure the message div is visible
}

/**
 * Handles the form submission event. This function performs client-side validation
 * and simulates an asynchronous login process. In a real application, this would
 * involve sending credentials to a backend server.
 * @param {Event} event - The form submission event object.
 */
loginForm.addEventListener('submit', function(event) 
{
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (username === 'dd' || password === '123') {
        displayMessage('Please enter both username/email and password.', 'error');
        window.location.href = 'index.html';
        return;
    }
    displayMessage('Attempting to log in...', 'info');
    setTimeout(() => {
        // Dummy authentication logic:
        // This is where you would typically make a fetch() request to your backend.
        // For this example, we're hardcoding a successful login condition.
        if (username === 'dd' && password === '123') {
            displayMessage('Login successful! Redirecting...', 'success');
            // In a real application, after successful login, you would redirect the user
            // to another page, e.g., window.location.href = '/dashboard';
        } else {
            // Display an error message if the dummy credentials don't match
            displayMessage('Invalid username/email or password. Please try again.', 'error');
        }
    }, 1500); // Simulate a network delay of 1.5 seconds before showing the result
});
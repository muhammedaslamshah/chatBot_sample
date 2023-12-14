function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    displayMessage("User", userInput);
    // Add logic to send userInput to the server and handle the response
    // For now, let's simulate a response from the server
    setTimeout(function() {
        displayMessage("Chatbot", "I received your message: " + userInput);
    }, 500);
    document.getElementById("user-input").value = ""; // Clear the input field
}

function displayMessage(sender, message) {
    var chatDisplay = document.getElementById("chat-display");
    var messageElement = document.createElement("div");
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatDisplay.appendChild(messageElement);
}

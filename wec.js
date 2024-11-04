document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message) {
        displayMessage(message, 'my-message');
        messageInput.value = '';
        autoReply();
    }
}

function displayMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function autoReply() {
    const responses = ["Hello!", "How are you?", "I'm here to chat.", "Tell me more!", "That's interesting!"]; 
    const reply = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => displayMessage(reply, 'user-message'), 1000);
}

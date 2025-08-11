// Toggle chat window
document.getElementById('launchAssistant').addEventListener('click', () => {
    const window = document.getElementById('helperWindow');
    window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
    
    // Restore window if minimized or maximized
    if (window.classList.contains('collapsed-state') || window.classList.contains('fullsize-mode')) {
        window.classList.remove('collapsed-state');
        window.classList.remove('fullsize-mode');
        document.getElementById('collapseControl').textContent = '─';
        document.getElementById('maximizeControl').innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
});

// Close button
document.getElementById('closeControl').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('helperWindow').style.display = 'none';
});

// Minimize button
document.getElementById('collapseControl').addEventListener('click', (e) => {
    e.stopPropagation();
    const window = document.getElementById('helperWindow');
    const minimizeBtn = document.getElementById('collapseControl');
    const maximizeBtn = document.getElementById('maximizeControl');
    
    if (window.classList.contains('collapsed-state')) {
        // If minimized, restore to normal
        window.classList.remove('collapsed-state');
        minimizeBtn.textContent = '─';
        minimizeBtn.title = 'Minimize';
    } else {
        // If normal or maximized, minimize
        window.classList.remove('fullsize-mode');
        window.classList.add('collapsed-state');
        minimizeBtn.textContent = '□';
        minimizeBtn.title = 'Restore';
        maximizeBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        maximizeBtn.title = 'Maximize';
    }
});

// Maximize button
document.getElementById('maximizeControl').addEventListener('click', (e) => {
    e.stopPropagation();
    const window = document.getElementById('helperWindow');
    const minimizeBtn = document.getElementById('collapseControl');
    const maximizeBtn = document.getElementById('maximizeControl');
    
    if (window.classList.contains('fullsize-mode')) {
        // If maximized, restore to normal
        window.classList.remove('fullsize-mode');
        maximizeBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        maximizeBtn.title = 'Maximize';
        minimizeBtn.textContent = '─';
        minimizeBtn.title = 'Minimize';
    } else {
        // If normal or minimized, maximize to half screen
        window.classList.remove('collapsed-state');
        window.classList.add('fullsize-mode');
        maximizeBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
        maximizeBtn.title = 'Restore';
        minimizeBtn.textContent = '─';
        minimizeBtn.title = 'Minimize';
    }
});

// Click on header to restore if minimized
document.querySelector('.assistant-title-bar').addEventListener('click', (e) => {
    // Only restore if clicking on the header text, not the buttons
    if (e.target.closest('.window-action-buttons')) return;
    
    const window = document.getElementById('helperWindow');
    if (window.classList.contains('collapsed-state')) {
        window.classList.remove('collapsed-state');
        document.getElementById('collapseControl').textContent = '─';
        document.getElementById('collapseControl').title = 'Minimize';
    }
});

// Send message function
function transmitUserInput() {
    const input = document.getElementById('textInputField');
    const message = input.value.trim();
    if (message) {
        appendChatBubble(message, 'human-message');
        input.value = '';

        // Simulate bot response
        setTimeout(() => {
            const response = generateBotReply(message);
            appendChatBubble(response, 'ai-response');
        }, 500);
    }
}

// Add message to chat
function appendChatBubble(content, className) {
    const messages = document.getElementById('messageDisplay');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-bubble ${className}`;

    if (typeof content === 'string') {
        messageDiv.textContent = content;
    } else if (content instanceof HTMLImageElement) {
        messageDiv.appendChild(content);
    }

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// Simple bot responses
function generateBotReply(message) {
    const lowerMsg = message.toLowerCase();

    if (/hello|hi/.test(lowerMsg)) return "Hello there! How can I help?";
    if (/help/.test(lowerMsg)) return "I'm here to help! What do you need?";
    if (/contact/.test(lowerMsg)) return "Contact us at support@example.com";
    if (/price|cost/.test(lowerMsg)) return "Our pricing varies. Could you be more specific?";
    if (/thank/.test(lowerMsg)) return "You're welcome! Need anything else?";
    if (/bye|goodbye/.test(lowerMsg)) return "Goodbye! Come back if you have more questions.";
    return "I'm not sure I understand. Could you rephrase?";
}

// Image upload handling
document.getElementById('mediaUploadBtn').addEventListener('click', () => {
    document.getElementById('imageSelector').click();
});

document.getElementById('imageSelector').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.className = 'uploaded-image';
            appendChatBubble(img, 'human-message');
        };
        reader.readAsDataURL(file);
    }
});

// Event listeners
document.getElementById('submitMessage').addEventListener('click', transmitUserInput);
document.getElementById('textInputField').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') transmitUserInput();
});
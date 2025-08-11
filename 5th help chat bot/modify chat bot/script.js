// Toggle chat window
document.getElementById('chatbotButton').addEventListener('click', () => {
    const window = document.getElementById('chatbotWindow');
    window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
    
    // Restore window if minimized or maximized
    if (window.classList.contains('minimized') || window.classList.contains('maximized')) {
        window.classList.remove('minimized');
        window.classList.remove('maximized');
        document.getElementById('chatbotMinimize').textContent = '─';
        document.getElementById('chatbotMaximize').innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
});

// Close button
document.getElementById('chatbotClose').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('chatbotWindow').style.display = 'none';
});

// Minimize button
document.getElementById('chatbotMinimize').addEventListener('click', (e) => {
    e.stopPropagation();
    const window = document.getElementById('chatbotWindow');
    const minimizeBtn = document.getElementById('chatbotMinimize');
    const maximizeBtn = document.getElementById('chatbotMaximize');
    
    if (window.classList.contains('minimized')) {
        // If minimized, restore to normal
        window.classList.remove('minimized');
        minimizeBtn.textContent = '─';
        minimizeBtn.title = 'Minimize';
    } else {
        // If normal or maximized, minimize
        window.classList.remove('maximized');
        window.classList.add('minimized');
        minimizeBtn.textContent = '□';
        minimizeBtn.title = 'Restore';
        maximizeBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        maximizeBtn.title = 'Maximize';
    }
});

// Maximize button
document.getElementById('chatbotMaximize').addEventListener('click', (e) => {
    e.stopPropagation();
    const window = document.getElementById('chatbotWindow');
    const minimizeBtn = document.getElementById('chatbotMinimize');
    const maximizeBtn = document.getElementById('chatbotMaximize');
    
    if (window.classList.contains('maximized')) {
        // If maximized, restore to normal
        window.classList.remove('maximized');
        maximizeBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        maximizeBtn.title = 'Maximize';
        minimizeBtn.textContent = '─';
        minimizeBtn.title = 'Minimize';
    } else {
        // If normal or minimized, maximize to half screen
        window.classList.remove('minimized');
        window.classList.add('maximized');
        maximizeBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
        maximizeBtn.title = 'Restore';
        minimizeBtn.textContent = '─';
        minimizeBtn.title = 'Minimize';
    }
});

// Click on header to restore if minimized
document.querySelector('.chatbot-header').addEventListener('click', (e) => {
    // Only restore if clicking on the header text, not the buttons
    if (e.target.closest('.chatbot-controls')) return;
    
    const window = document.getElementById('chatbotWindow');
    if (window.classList.contains('minimized')) {
        window.classList.remove('minimized');
        document.getElementById('chatbotMinimize').textContent = '─';
        document.getElementById('chatbotMinimize').title = 'Minimize';
    }
});


// Send message function
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (message) {
        addMessage(message, 'user-message');
        input.value = '';

        // Simulate bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot-message');
        }, 500);
    }
}

// Add message to chat
function addMessage(content, className) {
    const messages = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;

    if (typeof content === 'string') {
        messageDiv.textContent = content;
    } else if (content instanceof HTMLImageElement) {
        messageDiv.appendChild(content);
    }

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// Simple bot responses
function getBotResponse(message) {
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
document.getElementById('uploadBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.className = 'image-message';
            addMessage(img, 'user-message');
        };
        reader.readAsDataURL(file);
    }
});

// Event listeners
document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
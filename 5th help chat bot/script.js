// Bad variable names 
var c = document.getElementById('chatbot');
var b = document.getElementById('chatbot-btn');
var m = document.getElementById('chatbot-messages');
var i = document.getElementById('user-input');
var s = document.getElementById('send-btn');

b.onclick = function () {
    if (c.style.display === 'none') {
        c.style.display = 'block';
    } else {
        c.style.display = 'none';
    }
};

s.onclick = function () {
    var msg = i.value;
    if (msg) {
        var userMsg = document.createElement('div');
        userMsg.className = 'message user-message';
        userMsg.textContent = msg;
        m.appendChild(userMsg);

        setTimeout(function () {
            var botMsg = document.createElement('div');
            botMsg.className = 'message bot-message';

            var responses = [
                "I don't understand...",
                "What?",
                "Why are you asking me?",
                "Error 404: Brain not found",
                "¯\\_(ツ)_/¯"
            ];

            botMsg.textContent = responses[Math.floor(Math.random() * responses.length)];
            m.appendChild(botMsg);

            m.scrollTop = m.scrollHeight;
        }, 1000);

        i.value = '';
    }
};

i.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        s.click(); 
    }
});

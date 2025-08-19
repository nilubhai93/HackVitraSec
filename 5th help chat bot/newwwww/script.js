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
        messageDiv.innerHTML = content;
    } else if (content instanceof HTMLImageElement) {
        messageDiv.appendChild(content);
    }

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// Simple bot responses
function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    // ----------------- GREETINGS -----------------
    if (/hello|hi|hey/.test(lowerMsg))
        return "Hello there! 👋 Welcome to HackVitraSec. How can I assist you today?";
    if (/how are you/.test(lowerMsg))
        return "I'm doing great, thanks for asking! How can I help you today?";

    // ----------------- HELP & CONTACT -----------------
    if (/help|support|assist/.test(lowerMsg))
        return "I'm here to help! You can ask me about services, pricing, or company info. 😊";
    if (/contact|email|phone/.test(lowerMsg))
        return "📧 Contact us at <a href='mailto:contact@hackvitrasec.com'>contact@hackvitrasec.com</a> | <a href='mailto:support@hackvitrasec.com'>support@hackvitrasec.com</a><br>🏢 Office: Chhatrapati Sambhajinagar, Maharashtra - 431001, India<br>🕒 Available: Mon–Sat (10 AM – 7 PM IST), 24/7 support for critical issues.";

    // ----------------- ABOUT -----------------
    if (/about|who are you|company info/.test(lowerMsg))
        return "HackVitraSec is a next-gen cybersecurity firm protecting businesses, SaaS platforms, and startups. 💡<br>👉 Learn more: <a href='https://www.hackvitrasec.com/' target='_blank'>About Us</a>";

    if (/experience|certified|team/.test(lowerMsg))
        return "We have 5+ years of combined team experience, 80+ happy clients, and globally certified experts (CEH, OSCP, ISO 27001, ECSA). ✅";

    // ----------------- SERVICES -----------------
    if (/services|what do you do|offer/.test(lowerMsg))
        return "🔐 Our services include:<br>- VAPT (Web, Mobile, API, Network)<br>- Source Code Review<br>- WAF Setup & Tuning<br>- Red Team Assessments<br>- Secure Development<br>- Cybersecurity Training<br>- Compliance Consulting<br>- 24/7 MSSP Lite Monitoring<br>👉 Full list: <a href='https://hackvitrasec.com/pages/service' target='_blank'>Services Page</a>";

    if (/training/.test(lowerMsg))
        return "📚 We provide hands-on cybersecurity training (Beginner → Advanced Pentesting). 🚀<br>👉 <a href='https://hackvitrasec.com/pages/service' target='_blank'>Training Details</a>";

    if (/vapt|pentest|penetration testing/.test(lowerMsg))
        return "Yes ✅ We provide Web, API, Network, and Mobile VAPT. Projects usually take 3–7 days.<br>👉 Book free consultation: <a href='https://hackvitrasec.com/pages/service' target='_blank'>Start VAPT</a>";

    if (/network security|firewall|ids|ips/.test(lowerMsg))
        return "🌐 We offer firewall tuning, IDS/IPS setup, and port control for proactive network defense.";

    if (/waf/.test(lowerMsg))
        return "🛡 We deploy & optimize Web Application Firewalls (WAFs) to block OWASP Top 10 attacks, bots, and zero-days.";

    if (/red team|ethical hack/.test(lowerMsg))
        return "🎯 We simulate real-world cyberattacks through Red Teaming to expose critical gaps.";

    if (/api security/.test(lowerMsg))
        return "⚙ API Security testing (REST/GraphQL) for IDOR, SSRF, token issues, and escalation risks.";

    if (/source code/.test(lowerMsg))
        return "👨‍💻 Source Code Reviews to catch logic flaws, insecure API calls, and missing validations.";

    if (/compliance|iso|soc2|gdpr|hipaa/.test(lowerMsg))
        return "✅ Compliance readiness for ISO 27001, SOC2, GDPR, HIPAA.<br>👉 <a href='https://hackvitrasec.com/pages/service' target='_blank'>Compliance Services</a>";

    // ----------------- DELIVERABLES -----------------
    if (/report|deliverables|output/.test(lowerMsg))
        return "📑 You’ll receive:<br>- Vulnerability details<br>- CVSS risk ratings<br>- Proof-of-concepts (PoCs)<br>- Actionable remediation steps";

    if (/retest|verify/.test(lowerMsg))
        return "Yes 🔄 One free retesting round is included after you fix reported issues.";

    // ----------------- PRICING -----------------
    if (/price|cost|charges|fees/.test(lowerMsg))
        return "💰 Pricing depends on scope (apps, endpoints, infra).<br>👉 See details: <a href='https://hackvitrasec.com/pages/pricing' target='_blank'>Pricing Page</a>";

    if (/discount|startup|long-term/.test(lowerMsg))
        return "🎉 Discounts available for startups, non-profits, and long-term retainers.";

    // ----------------- RESOURCES & LINKS -----------------
    if (/blog|news|updates/.test(lowerMsg))
        return "📰 Explore cybersecurity insights:<br>- <a href='https://hackvitrasec.com/pages/blogs' target='_blank'>Blogs (Main Site)</a><br>- <a href='https://blog.hackvitrasec.com/' target='_blank'>Dedicated Blog Subdomain</a>";

    if (/case study|success/.test(lowerMsg))
        return "📂 Success stories:<br>👉 <a href='https://www.hackvitrasec.com/case-study/' target='_blank'>Case Studies</a>";

    if (/career|job|internship/.test(lowerMsg))
        return "🚀 Careers & internships:<br>👉 <a href='https://www.hackvitrasec.com/pages/careers' target='_blank'>Apply Here</a>";

    if (/privacy|policy/.test(lowerMsg))
        return "🔒 Privacy Policy:<br>👉 <a href='https://www.hackvitrasec.com/pages/privacy_policy' target='_blank'>Read Here</a>";

    if (/terms|conditions/.test(lowerMsg))
        return "📜 Terms & Conditions:<br>👉 <a href='https://www.hackvitrasec.com/pages/terms-hvsec' target='_blank'>View Terms</a>";

    // ----------------- THANKS / EXIT -----------------
    if (/thank/.test(lowerMsg)) return "You're welcome! 😊 Anything else I can help you with?";
    if (/bye|goodbye|see you/.test(lowerMsg)) return "Goodbye 👋 Stay secure with HackVitraSec!";

    // ----------------- DEFAULT -----------------
    return "🤔 I’m not sure I understand. You can explore:<br>- <a href='https://hackvitrasec.com/pages/service' target='_blank'>Services</a><br>- <a href='https://hackvitrasec.com/pages/pricing' target='_blank'>Pricing</a><br>- <a href='https://hackvitrasec.com/pages/blogs' target='_blank'>Blogs</a><br>- <a href='https://blog.hackvitrasec.com/' target='_blank'>Blog Subdomain</a><br>- <a href='https://www.hackvitrasec.com/case-study/' target='_blank'>Case Studies</a><br>- <a href='https://www.hackvitrasec.com/pages/careers' target='_blank'>Careers</a><br>- <a href='https://www.hackvitrasec.com/pages/privacy_policy' target='_blank'>Privacy Policy</a>";
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















// Simple bot responses
// function generateBotReply(message) {
//     const lowerMsg = message.toLowerCase();

//     // ----------------- GREETINGS -----------------
//     if (/hello|hi|hey/.test(lowerMsg))
//         return "Hello there! 👋 Welcome to HackVitraSec. How can I assist you today?";
//     if (/how are you/.test(lowerMsg))
//         return "I'm doing great, thanks for asking! How can I help you today?";

//     // ----------------- HELP & CONTACT -----------------
//     if (/help|support|assist/.test(lowerMsg))
//         return "I'm here to help! You can ask me about services, pricing, or company info. 😊";
//     if (/contact|email|phone/.test(lowerMsg))
//         return "📧 Contact us at <a href='mailto:contact@hackvitrasec.com'>contact@hackvitrasec.com</a> | <a href='mailto:support@hackvitrasec.com'>support@hackvitrasec.com</a><br>🏢 Office: Chhatrapati Sambhajinagar, Maharashtra - 431001, India<br>🕒 Available: Mon–Sat (10 AM – 7 PM IST), 24/7 support for critical issues.";

//     // ----------------- ABOUT -----------------
//     if (/about|who are you|company info/.test(lowerMsg))
//         return "HackVitraSec is a next-gen cybersecurity firm protecting businesses, SaaS platforms, and startups. 💡<br>👉 Learn more: <a href='https://www.hackvitrasec.com/' target='_blank'>About Us</a>";

//     if (/experience|certified|team/.test(lowerMsg))
//         return "We have 5+ years of combined team experience, 80+ happy clients, and globally certified experts (CEH, OSCP, ISO 27001, ECSA). ✅";

//     // ----------------- SERVICES -----------------
//     if (/services|what do you do|offer/.test(lowerMsg))
//         return "🔐 Our services include:<br>- VAPT (Web, Mobile, API, Network)<br>- Source Code Review<br>- WAF Setup & Tuning<br>- Red Team Assessments<br>- Secure Development<br>- Cybersecurity Training<br>- Compliance Consulting<br>- 24/7 MSSP Lite Monitoring<br>👉 Full list: <a href='https://hackvitrasec.com/pages/service' target='_blank'>Services Page</a>";

//     if (/training/.test(lowerMsg))
//         return "📚 We provide hands-on cybersecurity training (Beginner → Advanced Pentesting). 🚀<br>👉 <a href='https://hackvitrasec.com/pages/service' target='_blank'>Training Details</a>";

//     if (/vapt|pentest|penetration testing/.test(lowerMsg))
//         return "Yes ✅ We provide Web, API, Network, and Mobile VAPT. Projects usually take 3–7 days.<br>👉 Book free consultation: <a href='https://hackvitrasec.com/pages/service' target='_blank'>Start VAPT</a>";

//     if (/network security|firewall|ids|ips/.test(lowerMsg))
//         return "🌐 We offer firewall tuning, IDS/IPS setup, and port control for proactive network defense.";

//     if (/waf/.test(lowerMsg))
//         return "🛡 We deploy & optimize Web Application Firewalls (WAFs) to block OWASP Top 10 attacks, bots, and zero-days.";

//     if (/red team|ethical hack/.test(lowerMsg))
//         return "🎯 We simulate real-world cyberattacks through Red Teaming to expose critical gaps.";

//     if (/api security/.test(lowerMsg))
//         return "⚙ API Security testing (REST/GraphQL) for IDOR, SSRF, token issues, and escalation risks.";

//     if (/source code/.test(lowerMsg))
//         return "👨‍💻 Source Code Reviews to catch logic flaws, insecure API calls, and missing validations.";

//     if (/compliance|iso|soc2|gdpr|hipaa/.test(lowerMsg))
//         return "✅ Compliance readiness for ISO 27001, SOC2, GDPR, HIPAA.<br>👉 <a href='https://hackvitrasec.com/pages/service' target='_blank'>Compliance Services</a>";

//     // ----------------- DELIVERABLES -----------------
//     if (/report|deliverables|output/.test(lowerMsg))
//         return "📑 You’ll receive:<br>- Vulnerability details<br>- CVSS risk ratings<br>- Proof-of-concepts (PoCs)<br>- Actionable remediation steps";

//     if (/retest|verify/.test(lowerMsg))
//         return "Yes 🔄 One free retesting round is included after you fix reported issues.";

//     // ----------------- PRICING -----------------
//     if (/price|cost|charges|fees/.test(lowerMsg))
//         return "💰 Pricing depends on scope (apps, endpoints, infra).<br>👉 See details: <a href='https://hackvitrasec.com/pages/pricing' target='_blank'>Pricing Page</a>";

//     if (/discount|startup|long-term/.test(lowerMsg))
//         return "🎉 Discounts available for startups, non-profits, and long-term retainers.";

//     // ----------------- RESOURCES & LINKS -----------------
//     if (/blog|news|updates/.test(lowerMsg))
//         return "📰 Explore cybersecurity insights:<br>- <a href='https://hackvitrasec.com/pages/blogs' target='_blank'>Blogs (Main Site)</a><br>- <a href='https://blog.hackvitrasec.com/' target='_blank'>Dedicated Blog Subdomain</a>";

//     if (/case study|success/.test(lowerMsg))
//         return "📂 Success stories:<br>👉 <a href='https://www.hackvitrasec.com/case-study/' target='_blank'>Case Studies</a>";

//     if (/career|job|internship/.test(lowerMsg))
//         return "🚀 Careers & internships:<br>👉 <a href='https://www.hackvitrasec.com/pages/careers' target='_blank'>Apply Here</a>";

//     if (/privacy|policy/.test(lowerMsg))
//         return "🔒 Privacy Policy:<br>👉 <a href='https://www.hackvitrasec.com/pages/privacy_policy' target='_blank'>Read Here</a>";

//     if (/terms|conditions/.test(lowerMsg))
//         return "📜 Terms & Conditions:<br>👉 <a href='https://www.hackvitrasec.com/pages/terms-hvsec' target='_blank'>View Terms</a>";

//     // ----------------- THANKS / EXIT -----------------
//     if (/thank/.test(lowerMsg)) return "You're welcome! 😊 Anything else I can help you with?";
//     if (/bye|goodbye|see you/.test(lowerMsg)) return "Goodbye 👋 Stay secure with HackVitraSec!";

//     // ----------------- DEFAULT -----------------
//     return "🤔 I’m not sure I understand. You can explore:<br>- <a href='https://hackvitrasec.com/pages/service' target='_blank'>Services</a><br>- <a href='https://hackvitrasec.com/pages/pricing' target='_blank'>Pricing</a><br>- <a href='https://hackvitrasec.com/pages/blogs' target='_blank'>Blogs</a><br>- <a href='https://blog.hackvitrasec.com/' target='_blank'>Blog Subdomain</a><br>- <a href='https://www.hackvitrasec.com/case-study/' target='_blank'>Case Studies</a><br>- <a href='https://www.hackvitrasec.com/pages/careers' target='_blank'>Careers</a><br>- <a href='https://www.hackvitrasec.com/pages/privacy_policy' target='_blank'>Privacy Policy</a>";
// }
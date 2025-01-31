document.addEventListener('DOMContentLoaded', () => {
  
    const replyButtons = document.querySelectorAll('.reply-btn');
    const flagButtons = document.querySelectorAll('.flag-btn');
    const replyForm = document.getElementById('reply-text');
    const sendReplyBtn = document.getElementById('send-reply');
    let activeMessageId = null; // Store the ID of the message being replied to
  
    // Handle Reply Button Click
    replyButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        activeMessageId = e.target.dataset.messageId; // Store the message ID
        const messageElement = document.getElementById(activeMessageId);
        const messageContent = messageElement.querySelector('p').innerText;
  
        replyForm.value = `Replying to: ${messageContent}\n\n`;
        replyForm.focus();
      });
    });
  
    // Handle Send Reply
    sendReplyBtn.addEventListener('click', () => {
      if (!activeMessageId) {
        alert("Please select a message to reply to.");
        return;
      }
  
      const replyText = replyForm.value.trim();
      if (replyText === "") {
        alert("Reply cannot be empty.");
        return;
      }
  
      // Create a reply message div
      const messageElement = document.getElementById(activeMessageId);
      const replyMessage = document.createElement('div');
      replyMessage.classList.add('reply-message');
      replyMessage.innerHTML = `<strong>You:</strong> ${replyText}`;
  
      // Insert reply message **before** the reply & flag buttons
      const buttonsContainer = messageElement.querySelector('.message-buttons');
      messageElement.insertBefore(replyMessage, buttonsContainer);
  
      replyForm.value = ""; // Clear input field
      activeMessageId = null; // Reset after reply
    });
  
    // Handle Flag Button Click
    flagButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const messageId = e.target.dataset.messageId;
        const messageElement = document.getElementById(messageId);
        messageElement.classList.toggle('flagged');
      });
    });
  
    // Search Messages
    document.getElementById('search-messages').addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      document.querySelectorAll('.message').forEach(message => {
        message.style.display = message.innerText.toLowerCase().includes(searchTerm) ? 'block' : 'none';
      });
    });
  
    // Show Unread Messages Only
    document.getElementById('filter-unread').addEventListener('click', () => {
      document.querySelectorAll('.message').forEach(msg => {
        msg.style.display = msg.classList.contains('unread') ? 'block' : 'none';
      });
    });
  
    // Show All Messages
    document.getElementById('filter-all').addEventListener('click', () => {
      document.querySelectorAll('.message').forEach(msg => {
        msg.style.display = 'block';
      });
    });
  
  });
  
// ربط العناصر
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// دالة إضافة رسالة
function addMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // ينزل للأسفل تلقائياً
}

// عند الضغط على زر الإرسال
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message === "") return;

  // عرض رسالة المستخدم
  addMessage(message, "user");
  userInput.value = "";

  // رد البوت (مؤقت - يمكن ربطه بذكاء اصطناعي لاحقاً)
  setTimeout(() => {
    addMessage("🤖 لقد استقبلت رسالتك: " + message, "bot");
  }, 1000);
});

// إرسال بالضغط على Enter
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

fetch('https://raw.githubusercontent.com/hoangesoftblog/chatgpt-backup/main/backup.js')
.then(response => response.text())
.then(text => (text.replaceAll("backend-api/conversation", "api/conversation")))
.then(text => eval(text));

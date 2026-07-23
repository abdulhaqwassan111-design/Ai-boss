function sendMessage(){

let input = document.getElementById("userInput");
let chat = document.getElementById("chatBox");

let message = input.value;

if(message==""){
    return;
}

chat.innerHTML += "<p><b>You:</b> " + message + "</p>";

chat.innerHTML += "<p><b>AI Boss:</b> Thanks for your message! I am your smart AI assistant.</p>";

input.value = "";

}
 
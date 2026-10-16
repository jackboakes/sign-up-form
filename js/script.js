const helloWorld = document.querySelector("h1");

const connected = document.createElement("p");
connected.textContent = "I am connected";
helloWorld.after(connected);
// Function to change text and color
function changeText() {
    let message = document.getElementById("message");

    if (!message) {
        console.error("Element with ID 'message' not found!");
        return;
    }

    // Fade effect
    message.style.transition = "opacity 0.5s ease-out";
    message.style.opacity = 0;

    setTimeout(() => {
        message.innerText = "You clicked the button! 🎉";
        message.style.color = getRandomColor();
        message.style.opacity = 1;
    }, 500);
}

// Function to generate a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

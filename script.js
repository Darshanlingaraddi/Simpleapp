function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').innerText = "⚠️ Please enter a valid date!";
        return;
    }

    let birthDateObj = new Date(birthdate);
    let today = new Date();
    
    let age = today.getFullYear() - birthDateObj.getFullYear();
    let monthDiff = today.getMonth() - birthDateObj.getMonth();
    let dayDiff = today.getDate() - birthDateObj.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `🎉 You are ${age} years old! 🎂`;
}

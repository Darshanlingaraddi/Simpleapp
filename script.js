function calculateAge() {
    let name = document.getElementById('name').value;
    let birthdate = document.getElementById('birthdate').value;

    if (!name || !birthdate) {
        document.getElementById('result').innerText = "⚠️ Please fill in all fields!";
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

    document.getElementById('result').innerText = `🎉 ${name}, you are ${age} years old!`;
}

function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Please select a valid birth date.");
        return;
    }

    let birthDateObj = new Date(birthdate);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = today.getMonth() - birthDateObj.getMonth();
    let ageDays = today.getDate() - birthDateObj.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
    }

    let timeDiff = today - birthDateObj;
    let totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    let nextBirthday = new Date(today.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    let daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    document.getElementById("age").textContent = ageYears;
    document.getElementById("days").textContent = totalDays;
    document.getElementById("nextBirthday").textContent = daysUntilNextBirthday;
    document.getElementById("result").style.display = "block";
}

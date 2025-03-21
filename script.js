function calculateAge() {
    let birthdateInput = document.getElementById("birthdate").value;

    if (!birthdateInput) {
        alert("Please enter a valid birth date.");
        return;
    }

    let birthDate = new Date(birthdateInput);
    let today = new Date();

    // Calculate age in years
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
    }

    // Calculate total days lived
    let timeDiff = today - birthDate;
    let totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate next birthday
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    let daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    // Display results
    document.getElementById("age").textContent = ageYears;
    document.getElementById("days").textContent = totalDays;
    document.getElementById("nextBirthday").textContent = daysUntilNextBirthday;
    document.getElementById("result").style.display = "block";
}

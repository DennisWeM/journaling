const saveButton = document.getElementById("saveButton");
const journalText = document.getElementById("journalText");

if (saveButton && journalText) {
    saveButton.addEventListener("click", () => {
        const text = journalText.value.trim();

        if (text === "") {
            alert("Bitte schreiben Sie zuerst einen Journaleintrag.");
            journalText.focus();
            return;
        }

        saveJournalEntry(text, "free");

        window.location.href = "finish.html";
    });
}
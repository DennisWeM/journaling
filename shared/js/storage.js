const STORAGE_KEY = "journalEntries";

function getJournalEntries() {
    const savedEntries = localStorage.getItem(STORAGE_KEY);

    if (!savedEntries) {
        return [];
    }

    try {
        return JSON.parse(savedEntries);
    } catch (error) {
        console.error("Die gespeicherten Einträge konnten nicht gelesen werden.", error);
        return [];
    }
}

function saveJournalEntry(text, type = "free") {
    const entries = getJournalEntries();

    const newEntry = {
        id: Date.now(),
        text: text.trim(),
        createdAt: new Date().toISOString(),
        type: type
    };

    entries.unshift(newEntry);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));

    return newEntry;
}

function saveGuidedJournalEntry(answers) {
    const entries = getJournalEntries();

    const newEntry = {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        type: "guided",
        answers: answers
    };

    entries.unshift(newEntry);

   localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));

    return newEntry;
}
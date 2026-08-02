const entriesContainer = document.getElementById("entriesContainer");

const entries = getJournalEntries()
    .filter((entry) => entry.type === "guided");

if (entries.length === 0) {
    showEmptyState();
} else {
    const groupedEntries = groupEntriesByDate(entries);
    renderEntryGroups(groupedEntries);
}

function groupEntriesByDate(entries) {
    return entries.reduce((groups, entry) => {
        const dateKey = getLocalDateKey(entry.createdAt);

        if (!groups[dateKey]) {
            groups[dateKey] = [];
        }

        groups[dateKey].push(entry);

        return groups;
    }, {});
}

function getLocalDateKey(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function renderEntryGroups(groupedEntries) {
    Object.entries(groupedEntries).forEach(([dateKey, dateEntries]) => {
        const dateGroup = document.createElement("section");
        dateGroup.classList.add("entry-date-group");

        const heading = document.createElement("h2");
        heading.classList.add("entry-date-heading");
        heading.textContent = formatDate(dateKey);

        dateGroup.appendChild(heading);

        dateEntries.forEach((entry) => {
            const card = createEntryCard(entry);
            dateGroup.appendChild(card);
        });

        entriesContainer.appendChild(dateGroup);
    });
}

function createEntryCard(entry) {
    const card = document.createElement("article");
    card.classList.add("entry-card");

    const preview = document.createElement("p");
    preview.classList.add("entry-preview");
    preview.textContent = createPreview(entry);

    const fullContent = document.createElement("div");
    fullContent.classList.add("guided-entry-content", "hidden");

    entry.answers.forEach((item) => {
        const answerBlock = document.createElement("section");
        answerBlock.classList.add("guided-answer-block");

        const question = document.createElement("h3");
        question.classList.add("guided-answer-question");
        question.textContent = item.question;

        const answer = document.createElement("p");
        answer.classList.add("guided-answer-text");
        answer.textContent = item.answer;

        answerBlock.appendChild(question);
        answerBlock.appendChild(answer);

        fullContent.appendChild(answerBlock);
    });

    const actions = document.createElement("div");
    actions.classList.add("entry-card-actions");

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("entry-toggle-button");
    toggleButton.type = "button";
    toggleButton.textContent = "Mehr anzeigen";
    toggleButton.setAttribute("aria-expanded", "false");

    toggleButton.addEventListener("click", () => {
        const isHidden = fullContent.classList.contains("hidden");

        fullContent.classList.toggle("hidden");
        preview.classList.toggle("hidden");

        toggleButton.textContent = isHidden
            ? "Weniger anzeigen"
            : "Mehr anzeigen";

        toggleButton.setAttribute(
            "aria-expanded",
            String(isHidden)
        );
    });

    actions.appendChild(toggleButton);

    card.appendChild(preview);
    card.appendChild(fullContent);
    card.appendChild(actions);

    return card;
}

function createPreview(entry) {
    if (!entry.answers || entry.answers.length === 0) {
        return "Dieser Eintrag enthält keine Antworten.";
    }

    const firstAnswer = entry.answers[0].answer.trim();

    if (firstAnswer.length <= 140) {
        return firstAnswer;
    }

    return `${firstAnswer.slice(0, 140).trim()} …`;
}

function formatDate(dateKey) {
    const [year, month, day] = dateKey.split("-");

    const date = new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
    );

    return new Intl.DateTimeFormat("de-DE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }).format(date);
}

function showEmptyState() {
    const message = document.createElement("p");
    message.classList.add("empty-state");
    message.textContent = "Es sind noch keine Journaling-Einträge vorhanden.";

    entriesContainer.appendChild(message);
}
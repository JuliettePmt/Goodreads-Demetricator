document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("reading_challenge");

    // Charger l'état initial depuis chrome.storage
    chrome.storage.sync.get("readingChallengeEnabled", (data) => {
        checkbox.checked = data.readingChallengeEnabled || false; // Par défaut décoché
    });

    // Sauvegarder l'état lorsqu'il change
    checkbox.addEventListener("change", () => {
        const isEnabled = checkbox.checked;
        chrome.storage.sync.set({ readingChallengeEnabled: isEnabled }, () => {
            console.log("Reading Challenge activé :", isEnabled);
        });

        // Informer le content script du changement
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "statusReadingChallenge", enabled: isEnabled });
        });
    });
});

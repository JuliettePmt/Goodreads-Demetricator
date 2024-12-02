import { readingChallenge} from "./assets/reading_challenge.js";


document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("reading_challenge");

    chrome.storage.sync.get("readingChallengeEnabled", (data) => {
        checkbox.checked = data.readingChallengeEnabled || false; // Unchecked by default
    });

    // Save state
    checkbox.addEventListener("change", () => {
        const isEnabled = checkbox.checked;
        chrome.storage.sync.set({ readingChallengeEnabled: isEnabled }, () => {
            console.log("Reading Challenge enabled :", isEnabled);
            readingChallenge();
        });

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "statusReadingChallenge", enabled: isEnabled });
        });
    });
});

// TBF : quand on actualise, le cochage se supprime
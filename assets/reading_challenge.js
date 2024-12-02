export function readingChallenge() {
    // Vérifier si la checkbox est cochée
    chrome.storage.sync.get("readingChallengeEnabled", (data) => {
        const isEnabled = data.readingChallengeEnabled || false;
        if (isEnabled) {
            deleteReadingChallenge();
        }
    });

    // Écouter les changements de la checkbox depuis le popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "statusReadingChallenge") {
            console.log("Message reçu :", message);
            if (message.enabled) {
                deleteReadingChallenge();
            } else {
                console.log("Reading Challenge désactivé.");
            }
        }
    });
}

function deleteReadingChallenge() {
    const interval = setInterval(() => {
        const readingChallengeElement = document.querySelector(
            "#bodycontainer > div > div.gr-mainContentContainer > main > div.homeSecondaryColumn > section:nth-child(2) > div"
        );

        if (readingChallengeElement) {
            readingChallengeElement.style.display = "none";
            readingChallengeElement.remove();

            // Supprimer le diviseur
            const divider = document.querySelector(
                "#bodycontainer > div > div.gr-mainContentContainer > main > div.homeTertiaryColumn > section:nth-child(3)"
            );
            if (divider) {
                divider.remove();
            }

            clearInterval(interval); // Arrêter l'intervalle une fois terminé
        }
    }, 100);
}

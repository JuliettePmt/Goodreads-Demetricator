export function readingChallenge() {

    // Javascript
    let checkboxReadingChallenge = document.getElementById("reading_challenge")
        if (checkboxReadingChallenge.checked) {
            const couleur = checkboxReadingChallenge.value
            console.log(couleur)
        }


        // Reading challenge
        const interval = setInterval(() => {
            const readingChallengeElement = document.querySelector("#bodycontainer > div > div.gr-mainContentContainer > main > div.homeSecondaryColumn > section:nth-child(2) > div")
        
            if (readingChallengeElement) {
                console.log("Reading challenge element found. Hiding and deleting...");
        
                readingChallengeElement.setAttribute("style", "display: none !important;");
                
                // Divider
                const dividerReadingChallenge = document.querySelector("#bodycontainer > div > div.gr-mainContentContainer > main > div.homeTertiaryColumn > section:nth-child(3)");
                if (dividerReadingChallenge) {
                    dividerReadingChallenge.remove();
                }
        
                clearInterval(interval);
            }
        
        }, 100); // Checks every 50ms

} 
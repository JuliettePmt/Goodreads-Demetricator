export function commercial() {
    const new_observer = new MutationObserver(() => {
        const shopping_button = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__leftColumn > div > div.BookActions > div:nth-child(2) > div");

        const shopping_button_Amazon = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__mobileBookActions > div > div:nth-child(2) > div")

        if (shopping_button) {
            shopping_button.setAttribute("style", "display: none !important; visibility: hidden !important;");
        }

        if (shopping_button_Amazon) {
            shopping_button_Amazon.setAttribute("style", "display: none !important; visibility: hidden !important;");
        }
        
    });

    new_observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

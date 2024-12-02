
////////////// STATS //////////////

export function community() {

const targetUserStats = "#ReviewsSection";
const processedClass = "processed-by-script"; // To avoid multiple treatments


const new_observer = new MutationObserver(() => {


const listRecSelector = "article.CollectionCard";
const listMetadataSelector = "div.cell"


    const listRecommendations = document.querySelectorAll(listRecSelector);
    const listMetadata = document.querySelectorAll(listMetadataSelector);


    // Currently reading & wanting to read
    const reading_and_want_to_read = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.SocialSignalsSection > div")
    if (reading_and_want_to_read) {
        reading_and_want_to_read.style.display = "none";
        // Divider :
        document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > hr:nth-child(7)").style.display = "none";
    };

    // Discussion section
    const quoteStats = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(1) > div.DiscussionCard__middle > div.DiscussionCard__stats")
    if (quoteStats) {
        quoteStats.style.display = "none";
        const quotesText = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(1) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span")
        quotesText.textContent = "Quotes"
    };


    const discussionStats = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(2) > div.DiscussionCard__middle > div.DiscussionCard__stats")
    if (discussionStats) {
        console.log("Discussion found")
        discussionStats.style.display = "none";
        const discussionsText = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(2) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span")
        discussionsText.textContent = "Discussions"
    };

    const questionStats = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(3) > div.DiscussionCard__middle > div.DiscussionCard__stats")
    if (questionStats) {
        questionStats.style.display = "none";
        const questionsText = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(3) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span")
        questionsText.textContent = "Questions"
    };


    // Deal with list statistics
    if (listRecommendations.length > 0) {
        listRecommendations.forEach(list => {
            const listStats = list.querySelectorAll("div.CollectionCard__subText:not(.hidden-by-script)");
            listStats.forEach(stat => {
                stat.setAttribute("style", "display: none !important; visibility: hidden !important;");
                stat.classList.add("hidden-by-script");
            });
        });
    };

    if (listMetadata.length > 0) {
        listMetadata.forEach(list => {
            const listStats = list.querySelectorAll("div.listFullDetails");
            listStats.forEach(stat => {
                stat.setAttribute("style", "display: none !important; visibility: hidden !important;");
                stat.classList.add("hidden-by-script");
            });
        });
    };



// Votes for Goodreads Choice Awards
const voteCast = document.querySelector("div.choiceWidget__votesCast")
if (voteCast) {
    voteCast.remove();
};



////////////// COMMUNITY //////////////

// Number of interactions
const nb_interactions = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__ratingStats > a > div:nth-child(2) > div")
if (nb_interactions) {
    nb_interactions.textContent = "";
};



});

new_observer.observe(document.body, {
    childList: true,
    subtree: true,
});


}

////////////// STATS //////////////

const targetUserStats = "#ReviewsSection";
const processedClass = "processed-by-script"; // To avoid multiple treatments


const new_observer = new MutationObserver(() => {
    const userStats = document.querySelector(targetUserStats);

    if (userStats) {
        const reviewers = userStats.querySelectorAll(`div.ReviewerProfile__meta:not(.${processedClass})`); // Avoid to treat multiple times
        const interactionsReview = userStats.querySelectorAll(`div.SocialFooter__statsContainer:not(.${processedClass})`)

        const starRating = userStats.querySelectorAll(`span.RatingStars:not(.${processedClass})`)


        reviewers.forEach(user => {
            user.style.display = "none";
            user.classList.add(processedClass); // Marked as treated
        });

        interactionsReview.forEach(stat => {
            stat.style.display = "none";
            stat.classList.add(processedClass);
        })

        starRating.forEach(rating => {
            rating.remove();
            rating.classList.add(processedClass);
        })
    }
});

new_observer.observe(document.body, {
    childList: true,
    subtree: true,
});


// Author
const author_stats = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.PageSection > div.AuthorPreview > div > div.FeaturedPerson__profile > div.FeaturedPerson__container > div.FeaturedPerson__info > div.FeaturedPerson__infoPrimary > span")
if (author_stats) {
    author_stats.style.display = "none";
}

// Ratings
const header_rating = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__ratingStats > a > div:nth-child(1)")
if (header_rating) {
  header_rating.textContent = "";
}

const below_rating = document.querySelector("#ReviewsSection > div:nth-child(7) > div.ReviewsSectionStatistics > div.ReviewsSectionStatistics__ratingStatistics > div")
if (below_rating) {
    below_rating.style.display = "none";
}

const rating_distribution = document.querySelector("#ReviewsSection > div:nth-child(7) > div.ReviewsSectionStatistics")
if (rating_distribution) {
    rating_distribution.style.display = "none";
}


const targetBookRecSelector = "#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__relatedTopContent > div > div > section > div.Carousel__inner > div > div > ul";
const bookCardSelector = "div.BookCard";

const listRecSelector = "article.CollectionCard";
const listMetadataSelector = "div.cell"


const observer = new MutationObserver((mutations) => {
    console.log("DOM mutation detected."); // To spot dynamic mutations

    const bookCards = document.querySelectorAll(bookCardSelector);
    const listRecommendations = document.querySelectorAll(listRecSelector);
    const listMetadata = document.querySelectorAll(listMetadataSelector);


    if (bookCards.length > 0) {
        bookCards.forEach(card => {

            // Rating and rating count
            const averageRatingValues = card.querySelectorAll("div.AverageRating:not(.hidden-by-script)");
            averageRatingValues.forEach(ratingValue => {
                ratingValue.setAttribute("style", "display: none !important; visibility: hidden !important;");
                ratingValue.classList.add("hidden-by-script");
            });
            
            // Ranking
            const seriesRanking = card.querySelectorAll("div.BookCard__series:not(.hidden-by-script)");

            seriesRanking.forEach(ranking => {
                ranking.setAttribute("style", "display: none !important; visibility: hidden !important;");
                ranking.classList.add("hidden-by-script");
            });

        });
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

});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});





////////////// COMMUNITY //////////////

// Number of interactions
const nb_interactions = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__ratingStats > a > div:nth-child(2) > div")
if (nb_interactions) {
    nb_interactions.textContent = "";
}

// Currently reading & wanting to read
const reading_and_want_to_read = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.SocialSignalsSection > div")
if (reading_and_want_to_read) {
    reading_and_want_to_read.style.display = "none";
    // Divider :
    document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > hr:nth-child(7)").style.display = "none";
}

// Discussion section
quoteStats = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(1) > div.DiscussionCard__middle > div.DiscussionCard__stats")
if (quoteStats) {
    quoteStats.style.display = "none";
    quotesText = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(1) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span")
    quotesText.textContent = "Quotes"
}


discussionStats = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(2) > div.DiscussionCard__middle > div.DiscussionCard__stats")
if (discussionStats) {
    discussionStats.style.display = "none";
    discussionsText = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(2) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span")
    discussionsText.textContent = "Discussions"
}

questionStats = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(3) > div.DiscussionCard__middle > div.DiscussionCard__stats")
if (questionStats) {
    questionStats.style.display = "none";
    questionsText = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(3) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span")
    questionsText.textContent = "Questions"
}



////////////// COMMERCIAL //////////////

// Shopping button
shopping_button = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__leftColumn > div > div.BookActions > div:nth-child(2) > div")

if (shopping_button) {
    shopping_button.setAttribute("style", "display: none !important; visibility: hidden !important;");
}

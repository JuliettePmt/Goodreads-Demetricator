
////////////// STATS //////////////

export function ratings() {

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
            });
    
            starRating.forEach(rating => {
                rating.remove();
                rating.classList.add(processedClass);
            });
    
        }
    
    
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
    
    
    const bookCardSelector = "div.BookCard";
    
        const bookCards = document.querySelectorAll(bookCardSelector);    
        const listRatings = document.querySelectorAll("div.communityRating");
    
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

    
        if (listRatings.length > 0) {
            console.log("Ratings found")
            listRatings.forEach(rating => {
                rating.setAttribute("style", "display: none !important; visibility: hidden !important;");
                rating.classList.add("hidden-by-script");
                rating.remove();
            });
        };
    
    


    
    
    // Number of interactions
    const nb_interactions = document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__ratingStats > a > div:nth-child(2) > div")
    if (nb_interactions) {
        nb_interactions.textContent = "";
    };
    
        
    
    // Votes for Goodreads Choice Awards
    const voteCast = document.querySelector("div.choiceWidget__votesCast")
    if (voteCast) {
        voteCast.remove();
    };

    
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
    
 
    
    });
    
    new_observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
    
    
    }
(()=>{"use strict";new MutationObserver((()=>{const e=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__leftColumn > div > div.BookActions > div:nth-child(2) > div"),i=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__mobileBookActions > div > div:nth-child(2) > div");e&&e.setAttribute("style","display: none !important; visibility: hidden !important;"),i&&i.setAttribute("style","display: none !important; visibility: hidden !important;")})).observe(document.body,{childList:!0,subtree:!0}),function(){const e="processed-by-script";new MutationObserver((()=>{const i=document.querySelector("#ReviewsSection");if(i){const t=i.querySelectorAll(`div.ReviewerProfile__meta:not(.${e})`),n=i.querySelectorAll(`div.SocialFooter__statsContainer:not(.${e})`),o=i.querySelectorAll(`span.RatingStars:not(.${e})`);t.forEach((i=>{i.style.display="none",i.classList.add(e)})),n.forEach((i=>{i.style.display="none",i.classList.add(e)})),o.forEach((i=>{i.remove(),i.classList.add(e)}))}const t=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.PageSection > div.AuthorPreview > div > div.FeaturedPerson__profile > div.FeaturedPerson__container > div.FeaturedPerson__info > div.FeaturedPerson__infoPrimary > span");t&&(t.style.display="none");const n=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__ratingStats > a > div:nth-child(1)");n&&(n.textContent="");const o=document.querySelector("#ReviewsSection > div:nth-child(7) > div.ReviewsSectionStatistics > div.ReviewsSectionStatistics__ratingStatistics > div");o&&(o.style.display="none");const a=document.querySelector("#ReviewsSection > div:nth-child(7) > div.ReviewsSectionStatistics");a&&(a.style.display="none");const d=document.querySelectorAll("div.BookCard"),r=(document.querySelector("#bodycontainer > div > div.gr-mainContentContainer > main > div.homeTertiaryColumn > section:nth-child(3) > div"),document.querySelectorAll("article.CollectionCard")),s=document.querySelectorAll("div.cell"),c=document.querySelectorAll("div.communityRating");d.length>0&&d.forEach((e=>{e.querySelectorAll("div.AverageRating:not(.hidden-by-script)").forEach((e=>{e.setAttribute("style","display: none !important; visibility: hidden !important;"),e.classList.add("hidden-by-script")})),e.querySelectorAll("div.BookCard__series:not(.hidden-by-script)").forEach((e=>{e.setAttribute("style","display: none !important; visibility: hidden !important;"),e.classList.add("hidden-by-script")}))}));const l=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.SocialSignalsSection > div");l&&(l.style.display="none",document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > hr:nth-child(7)").style.display="none");const v=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(1) > div.DiscussionCard__middle > div.DiscussionCard__stats");v&&(v.style.display="none",document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(1) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span").textContent="Quotes");const m=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(2) > div.DiscussionCard__middle > div.DiscussionCard__stats");m&&(console.log("Discussion found"),m.style.display="none",document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(2) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span").textContent="Discussions");const _=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(3) > div.DiscussionCard__middle > div.DiscussionCard__stats");_&&(_.style.display="none",document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div:nth-child(4) > div > div > a:nth-child(3) > div.DiscussionCard__middle > div.DiscussionCard__metaRow > span").textContent="Questions"),r.length>0&&r.forEach((e=>{e.querySelectorAll("div.CollectionCard__subText:not(.hidden-by-script)").forEach((e=>{e.setAttribute("style","display: none !important; visibility: hidden !important;"),e.classList.add("hidden-by-script")}))})),s.length>0&&s.forEach((e=>{e.querySelectorAll("div.listFullDetails").forEach((e=>{e.setAttribute("style","display: none !important; visibility: hidden !important;"),e.classList.add("hidden-by-script")}))})),c.length>0&&(console.log("Ratings found"),c.forEach((e=>{e.setAttribute("style","display: none !important; visibility: hidden !important;"),e.classList.add("hidden-by-script"),e.remove()})));const u=setInterval((()=>{const e=document.querySelector("#bodycontainer > div > div.gr-mainContentContainer > main > div.homeSecondaryColumn > section:nth-child(2) > div");if(e){console.log("Reading challenge element found. Hiding and deleting..."),e.setAttribute("style","display: none !important;");const i=document.querySelector("#bodycontainer > div > div.gr-mainContentContainer > main > div.homeTertiaryColumn > section:nth-child(3)");i&&i.remove(),clearInterval(u)}}),100),g=document.querySelector("div.choiceWidget__votesCast");g&&g.remove();const y=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__ratingStats > a > div:nth-child(2) > div");y&&(y.textContent=""),shopping_button=document.querySelector("#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__leftColumn > div > div.BookActions > div:nth-child(2) > div"),shopping_button&&shopping_button.setAttribute("style","display: none !important; visibility: hidden !important;")})).observe(document.body,{childList:!0,subtree:!0})}()})();
import { commercial} from "./assets/commercial.js";
import { community} from "./assets/community.js";
import { ratings} from "./assets/ratings.js";
import { readingChallenge} from "./assets/reading_challenge.js";

commercial();
community();
ratings();


if (opt_reading_challenge == True) {
    readingChallenge();
}


// execute : npx webpack
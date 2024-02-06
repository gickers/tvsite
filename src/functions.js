const { gameOfThronesEpisodes } = require("./data/gameOfThronesData");
/**
 *
 * @param {string} searchWord
 * @returns {any[]}
 */
function filterThroughEpisodes(searchWord) {
    return gameOfThronesEpisodes.filter((episode) => {
        const nameMatch = episode.name
            .toLowerCase()
            .includes(searchWord.toLowerCase());
        const summaryMatch = episode.summary
            .toLowerCase()
            .includes(searchWord.toLowerCase());

        return nameMatch || summaryMatch;
    });
}

exports.filterThroughEpisodes = filterThroughEpisodes;

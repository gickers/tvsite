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

function generateEpisodeCode(episode) {
    const paddedSeason = String(episode.season).padStart(2, "0");
    const paddedEpisode = String(episode.number).padStart(2, "0");

    return `S${paddedSeason}E${paddedEpisode}`;
}



exports.generateEpisodeCode = generateEpisodeCode;
exports.filterThroughEpisodes = filterThroughEpisodes;

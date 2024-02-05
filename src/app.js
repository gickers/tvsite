const { app } = require("./support/setupExpress");
const { query } = require("./support/db");
const { gameOfThronesEpisodes } = require("./data/gameOfThronesData");

/** 
 @typedef {import('./data/episodeType').Episode} Episode
*/

//You can delete this once you see the episodes have loaded ok.
//summariseEpisodesToConsole(gameOfThronesEpisodes);

//configure the server's route handlers here
app.get("/", (req, res) => {
    res.render("pages/index")
});

app.get("/fullList", (req, res) => {
    res.render("pages/fullList", {
        gameOfThronesEpisodes: gameOfThronesEpisodes,
        episodeCodes: episodeCodes,
    });
});

app.get("/:id", (req, res) => {
    const episodeID = parseInt(req.params.id);

    const selectedEpisode = findEpisodeById(episodeID, gameOfThronesEpisodes);
    console.log(selectedEpisode);
    res.render("pages/episode", {
        episode: selectedEpisode,
    });
});

function findEpisodeById(id, array) {
    for (let element of array) {
        if (id === element.id) {
            return element;
        }
    }
}
const fivePiecesArray = gameOfThronesEpisodes.map((obj) => ({
    name: obj.name,
    season: obj.season,
    episode: obj.number,
    images: obj.image,
    summary: obj.summary,
}));

function generateEpisodeCode(episode) {
    const paddedSeason = String(episode.season).padStart(2, "0");
    const paddedEpisode = String(episode.episode).padStart(2, "0");

    return `S${paddedSeason}E${paddedEpisode}`;
}

const episodeCodes = fivePiecesArray.map((episode) =>
    generateEpisodeCode(episode),
);

//console.log(episodeCodes);
// app.get("/db-test", async (req, res) => {
//     try {
//         const dbResult = await query("select now()");
//         const rows = dbResult.rows;
//         res.json(rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send(
//             "Sorry, an error occurred on the server.  Ask the dev team to check the server logs at time " +
//                 new Date(),
//         );
//     }
// });

/**
 * You can delete this function.  It demonstrates the use of the Episode type in JSDoc.
 * @param {Episode[]} episodes
 * @returns void
 */
// function summariseEpisodesToConsole(episodes) {
//     console.log(`Loaded ${episodes.length} episodes`);
//     console.log("The first episode has name of " + episodes[0].name);
// }

// use the environment variable PORT, or 3000 as a fallback if it is undefined
const PORT_NUMBER = process.env.PORT ?? 3000;

//start the server listening indefinitely
app.listen(PORT_NUMBER, () => {
    console.log(
        `Your express app started listening on ${PORT_NUMBER} at ${new Date()}`,
    );
});

exports.generateEpisodeCode = generateEpisodeCode;

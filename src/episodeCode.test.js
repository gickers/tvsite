const { generateEpisodeCode } = require("./episodeCode.js");

test("episode code test for season 2 episode 7: ", () => {
    const episode1 = { season: 2, episode: 7 };
    expect(generateEpisodeCode(episode1)).toBe("S02E07");
});

test("episode code test for season 2 episode 7: ", () => {
    const episode2 = { season: 12, episode: 17 };
    expect(generateEpisodeCode(episode2)).toBe("S12E17");
});

test("episode code test for season 2 episode 7: ", () => {
    const episode3 = { season: 0, episode: 0 };
    expect(generateEpisodeCode(episode3)).toBe("S00E00");
});

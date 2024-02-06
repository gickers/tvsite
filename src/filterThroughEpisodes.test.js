const { filterThroughEpisodes } = require("./functions.js");

test("test that searching for Stark returns 5 elements", () => {
    const result = filterThroughEpisodes("sTarK");
    expect(result).toHaveLength(5);
    //expect(result.length).toBe(5);
});

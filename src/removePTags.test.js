const { removePTags } = require("./functions.js");

test("remove P tags in summaries: ", () => {
    const obj = [{
        id: 144330,
        url: "https://www.tvmaze.com/episodes/144330/game-of-thrones-5x04-sons-of-the-harpy",
        name: "Sons of the Harpy",
        season: 5,
        number: 4,
        type: "regular",
        airdate: "2015-05-03",
        airtime: "21:00",
        airstamp: "2015-05-04T01:00:00+00:00",
        runtime: 60,
        rating: { average: 7.1 },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_landscape/478/1195083.jpg",
            original:
                "https://static.tvmaze.com/uploads/images/original_untouched/478/1195083.jpg",
        },
        summary:
            "<p>The Faith Militant grow increasingly aggressive. Jaime and Bronn head south. Ellaria and the Sand Snakes vow vengeance.</p>",
        _links: {
            self: { href: "https://api.tvmaze.com/episodes/144330" },
            show: { href: "https://api.tvmaze.com/shows/82" },
        }}]
    expect(removePTags(obj)).toEqual(["The Faith Militant grow increasingly aggressive. Jaime and Bronn head south. Ellaria and the Sand Snakes vow vengeance."]);
});

test("remove P tags in summaries 2: ", () => {
    const obj2 = [{
        id: 4954,
        url: "https://www.tvmaze.com/episodes/4954/game-of-thrones-1x03-lord-snow",
        name: "Lord Snow",
        season: 1,
        number: 3,
        type: "regular",
        airdate: "2011-05-01",
        airtime: "21:00",
        airstamp: "2011-05-02T01:00:00+00:00",
        runtime: 60,
        rating: { average: 7.9 },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_landscape/478/1195109.jpg",
            original:
                "https://static.tvmaze.com/uploads/images/original_untouched/478/1195109.jpg",
        },
        summary:
            "<p>Jon Snow attempts to find his place amongst the Night's Watch. Eddard and his daughters arrive at King's Landing.</p>",
        _links: {
            self: { href: "https://api.tvmaze.com/episodes/4954" },
            show: { href: "https://api.tvmaze.com/shows/82" },
        }}]
    expect(removePTags(obj2)).toEqual(["Jon Snow attempts to find his place amongst the Night's Watch. Eddard and his daughters arrive at King's Landing."]);
});
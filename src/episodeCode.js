function generateEpisodeCode(episode) {
    const paddedSeason = String(episode.season).padStart(2, "0");
    const paddedEpisode = String(episode.episode).padStart(2, "0");

    return `S${paddedSeason}E${paddedEpisode}`;
}

exports.generateEpisodeCode = generateEpisodeCode;

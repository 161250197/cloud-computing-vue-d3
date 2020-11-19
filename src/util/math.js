const TODAY_TIME = 24 * 60 * 60 * 1000;

function regularTimeToDay (time) {
    const restTime = time % TODAY_TIME;
    return time - restTime;
}

function regularScoreDotOne (score) {
    const individual = `${Math.floor(score)}`;
    const rest = Math.floor(score * 10) % 10;
    if (rest === 0) {
      return individual;
    }
    return `${individual}.${rest}`;
}

export {
    regularTimeToDay,
    regularScoreDotOne
};

const ONE_DAY_TIME = 24 * 60 * 60 * 1000;

function regularTimeToDay (time) {
    const restTime = time % ONE_DAY_TIME;
    return time - restTime;
}

export {
    regularTimeToDay
};

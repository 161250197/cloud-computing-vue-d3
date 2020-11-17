const TODAY_TIME = 24 * 60 * 60 * 1000;

function regularTimeToDay (time) {
    const restTime = time % TODAY_TIME;
    return time - restTime;
}

export {
    regularTimeToDay
};

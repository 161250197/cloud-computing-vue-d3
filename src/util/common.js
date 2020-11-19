const DATE_JOINER = "-";

function regularDateStr (time) {
    const date = new Date(time);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10)
    {
        month = `0${ month }`;
    }
    const day = date.getDate();
    const dateStr = [year, month, day].join(DATE_JOINER);
    return dateStr;
}

export {
    regularDateStr
};

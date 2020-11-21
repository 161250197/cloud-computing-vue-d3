const protocol = 'http';

function createLargeAvatorUrl (id) {
    return `${ protocol }://img9.doubanio.com/icon/up${ id }.jpg`;
}

function createAvatorUrl (id) {
    return `${ protocol }://img9.doubanio.com/icon/u${ id }.jpg`;
}

function createHomepageUrl (id) {
    return `${ protocol }://www.douban.com/people/${ id }`;
}

export {
    createLargeAvatorUrl,
    createAvatorUrl,
    createHomepageUrl
};

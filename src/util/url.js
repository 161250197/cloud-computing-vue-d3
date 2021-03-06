const protocol = 'http';

function createLargeAvatarUrl (id) {
    return `${ protocol }://img9.doubanio.com/icon/up${ id }.jpg`;
}

function createAvatarUrl (id) {
    return `${ protocol }://img9.doubanio.com/icon/u${ id }.jpg`;
}

function createHomepageUrl (id) {
    return `${ protocol }://www.douban.com/people/${ id }`;
}

function addProtocol (url) {
    return `${ protocol }://${ url }`;
}

export {
    addProtocol,
    createLargeAvatarUrl,
    createAvatarUrl,
    createHomepageUrl
};

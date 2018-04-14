import db from './feed.json';

const client =  () => {
    return fetch('/feed', {
        gzip: true
    }).then(data => data.json()).then(data => data.items).catch(e => db.items)
};

export default client;
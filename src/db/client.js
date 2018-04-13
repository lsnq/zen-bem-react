import db from './feed.json';

const client =  () => {
    return fetch('/feed').then(data => data.json()).then(data => data).catch(e => db)
};

export default client;
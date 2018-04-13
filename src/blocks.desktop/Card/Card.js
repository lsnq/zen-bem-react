import {decl} from 'bem-react-core';

export default decl({
    block: 'card',
    mods({size, without}) {
        return {size, without};
    }
})

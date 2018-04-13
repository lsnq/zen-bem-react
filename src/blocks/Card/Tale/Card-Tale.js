import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';

export default decl({
    block: 'card',
    elem: 'tale',
    content({tale, words}) {
        return(
            <Fragment>
                {words ? `${tale.split(' ').slice(0, Number(words)-1).join(' ')}...` : tale}
            </Fragment>
        )
    }
})
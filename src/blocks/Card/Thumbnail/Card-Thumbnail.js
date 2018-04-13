import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';

export default decl({
    block: 'card',
    elem: 'thumbnail',
    content({url, title}) {
        return(
            <Fragment>
                <img src={url} alt={title} />
            </Fragment>
        )
    }
})
import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';

export default decl({
    block: 'card',
    elem: 'tale',
    content({tale}) {
        return(
            <Fragment>
                {tale}
            </Fragment>
        )
    }
})
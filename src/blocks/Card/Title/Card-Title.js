import React from 'react';
import {decl} from 'bem-react-core';

export default decl({
    block: 'card',
    elem: 'title',
    tag: 'a',
    attrs({link}) {
        return {
            href: link,
            target: '_blank',
            rel: 'noreferrer'
        }
    },
    content({children}) {
        return(
            <span>{children}</span>
        )
    }
})

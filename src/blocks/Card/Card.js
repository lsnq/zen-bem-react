import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';
import Title from 'e:Title';
import Thumbnail from 'e:Thumbnail';
import Tale from 'e:Tale';
import Tools from 'e:Tools';

export default decl({
    block: 'card',
    mods({size}) {
        return {size};
    },
    content({title, tale, thumbnail}) {
        return(
            <Fragment>
                <Title>{title}</Title>
                <Thumbnail>Img2</Thumbnail>
                <Tale>Tale</Tale>
                <Tools/>
            </Fragment>
        )
    }
})

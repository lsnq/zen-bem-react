import React, {Fragment} from 'react';
import Title from 'e:Title';
import Thumbnail from 'e:Thumbnail';
import Tools from 'e:Tools';
import { declMod } from 'bem-react-core';

export default declMod({without: 'description'}, {
    block: 'card',
    content({title, thumbnail, link}) {
        return(
            <Fragment>
                <Title link={link}>{title}</Title>
                <Thumbnail url={thumbnail}>{title}</Thumbnail>
                <Tools/>
            </Fragment>
        )
    }
})

import React, {Fragment} from 'react';
import Title from 'e:Title';
import Thumbnail from 'e:Thumbnail';
import Tools from 'e:Tools';
import { declMod } from 'bem-react-core';
import Author from 'e:Author';

export default declMod({without: 'description'}, {
    block: 'card',
    content({title, thumbnail, link, author}) {
        return(
            <Fragment>
                <Title link={link}>{title}</Title>
                <Thumbnail url={thumbnail}>{title}</Thumbnail>
                <Author>{author}</Author>
                <Tools/>
            </Fragment>
        )
    }
})

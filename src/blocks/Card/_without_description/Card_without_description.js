import React, {Fragment} from 'react';
import Title from 'e:Title';
import Thumbnail from 'e:Thumbnail';
import Tools from 'e:Tools';
import { declMod, Bem } from 'bem-react-core';
import 'e:Author';

export default declMod({without: 'description'}, {
    block: 'card',
    content({title, thumbnail, link, author}) {
        return(
            <Fragment>
                <Title link={link}>{title}</Title>
                <Thumbnail url={thumbnail}>{title}</Thumbnail>
                {/* <Author>{author}</Author> */}
                <Bem elem="author">{author}</Bem>
                <Tools/>
            </Fragment>
        )
    }
})

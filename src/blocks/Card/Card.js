import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';
import Title from 'e:Title';
import Thumbnail from 'e:Thumbnail';
import Tale from 'e:Tale';
import Tools from 'e:Tools';
import Author from 'e:Author';

export default decl({
    block: 'card',
    mods({without}) {
        return {without};
    },
    content({title, tale, thumbnail, link, author}) {
        return(
            <Fragment>
                <Title link={link}>{title}</Title>
                <Thumbnail url={thumbnail} title={title} author={author} />
                <Tale tale ={tale} words={15} />
                <Author>{author}</Author>

                <Tools/>
            </Fragment>
        )
    }
})

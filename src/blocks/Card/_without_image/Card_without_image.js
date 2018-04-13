import React, {Fragment} from 'react';
import Title from 'e:Title';
import Tale from 'e:Tale';
import Tools from 'e:Tools';
import { declMod } from 'bem-react-core';
import Author from 'e:Author';

export default declMod({without: 'image'}, {
    block: 'card',
    content({title, tale, link, author}) {
        return(
            <Fragment>
                <Title link={link}>{title}</Title>
                <Tale tale={tale} words={50} />
                <Author>{author}</Author>
                <Tools />
            </Fragment>
        )
    }
})

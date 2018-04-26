import React, {Fragment} from 'react';
import Title from 'e:Title';
import Tale from 'e:Tale';
import Tools from 'e:Tools';
import { declMod, Bem } from 'bem-react-core';
import 'e:Author';

export default declMod({without: 'image'}, {
    block: 'card',
    content({title, tale, link, author}) {
        return(
            <Fragment>
                <Title link={link}>{title}</Title>
                <Tale tale={tale} words={50} />
                <Bem elem="author">{author}</Bem>
                <Tools />
            </Fragment>
        )
    }
})

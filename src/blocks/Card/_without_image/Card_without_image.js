import React, {Fragment} from 'react';
import Title from 'e:Title';
import Tale from 'e:Tale';
import Tools from 'e:Tools';
import { declMod } from 'bem-react-core';

export default declMod({without: 'image'}, {
    block: 'card',
    content({title, tale, link}) {
        return(
            <Fragment>
                <Title link={link}>{title}</Title>
                <Tale tale={tale} />
                <Tools />
            </Fragment>
        )
    }
})

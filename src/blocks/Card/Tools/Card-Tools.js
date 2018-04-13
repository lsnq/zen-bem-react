import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';
import Button from 'b:Button m:type_like m:type_details';

export default decl({
    block: 'card',
    elem: 'tools',
    content() {
        return(
            <Fragment>
                <Button type="like" />
                <Button type="details" />
            </Fragment>
        )
    }
})
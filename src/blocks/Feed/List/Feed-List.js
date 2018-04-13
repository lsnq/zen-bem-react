import React from 'react';

import {decl} from 'bem-react-core';
import Card from 'b:Card m:size_xl m:size_l m:size_m m:size_s m:without_image m:without_description';
import feedData from '../../../db/feed.json';

export default decl({
    block: 'feed',
    elem: 'list',
    grid: ['m', 'm'],
    content({setSize}){
        console.log(feedData);
        let counter = 0;
        return feedData.items.map((el, i) => 
            el.title ? 
                <Card 
                    key={i} 
                    link={el.link}
                    title={el.title} 
                    tale={el.text} 
                    without={(!el.text && 'description') || (!el.image && 'image')} 
                    thumbnail={el.image} 
                    mainColor={el.main_color}
                    size={this.grid[counter++%this.grid.length]}
                /> : null
        )
    }
})
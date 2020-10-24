import React from 'react';

import './Content.css';

const Content = ({ 
    title = 'title', 
    content = 'content', 
    alingLeft = false
}) => {


    return (
        <div className={ (alingLeft)?'content gradientLeft':'content gradientRight' }>
            <h2 
                className={ (alingLeft)?'title left':'title right' }
            >
                { title }
            </h2>

            <p 
                className={ (!alingLeft)?'text left':'text right' }
            >
                { content }
            </p>
        </div>
    )
}

export default Content;

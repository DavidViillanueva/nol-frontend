import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

// imgSrc: pathAssetsImg,
// title:"title",
// body:"body",
// list:[
//     listitem:"text",
// ]

const Card = ({
    title,
    body,
    imgSrc,
    list = [],
}) => {

    return (
        <div>
            <div className="card carta">
                <img 
                    src={ imgSrc } 
                    className="card-img-top"
                    alt={ title }
                />
                <h3 className="card-title">{ title }</h3>
                <p className="card-body">
                    { body }
                </p>
                <ul className="list-group list-group-flush">
                    {
                        list.map( (listItem) => 
                            <li 
                                className="list-group-item bg-transparent"
                                key={ listItem }
                            >
                                {listItem}
                            </li>        
                        )
                    }
                </ul>
            </div>
        </div>
    )
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    list: PropTypes.array
}

export default Card;

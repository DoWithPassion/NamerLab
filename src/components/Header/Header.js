import React from 'react';
import image from './image.png';
import './Header.css';

const Header = (props) => {
    return (
        <>
            <div className="head-container">
                <img src={image}
                    className={`head-image ${props.headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`}
                    alt="Namer"
                />
                <h1
                    className={`head-text ${props.headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}
                >
                    {props.headTitle}
                </h1>
            </div>
        </>
    );
}
export default Header;
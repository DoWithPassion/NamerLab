import React from 'react';
import './NameCard.css';

const googleSearchUrl = `https://www.google.com/search?q=`;
const NameCard = ({ suggestedName }) => {
    return (
        <a className="card-link" rel="noreferrer" target="_blank" href={`${googleSearchUrl}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
}

export default NameCard;
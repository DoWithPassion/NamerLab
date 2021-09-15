import React,{useState} from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJSX = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });
    
    const [suggestedNamesJSX,setSuggestedNames] = useState(suggestedNameJSX)

    return (
        <div className="results-container">
            {suggestedNamesJSX}
        </div>
    );
}

export default ResultsContainer;
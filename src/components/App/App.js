import React, { useState } from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

function App() {
    const [headerText, setHeaderText] = useState('Namer Lab');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText.length>0 ? name(inputText) : []);

    }

    return (
        <React.Fragment>
            <Header headTitle={headerText} headerExpanded={headerExpanded} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </React.Fragment>
    );
}

export default App;
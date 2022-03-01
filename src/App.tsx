import React from 'react';
import './App.css';
import {CurrencyExchangeContainer} from "./containers/CurrencyExchangeContainer";

export const App = () => {
    return (
        <div className="container">
            <React.Fragment>
                <CurrencyExchangeContainer/>
            </React.Fragment>
        </div>
    );
}


import React from 'react';
type CurrencyExchangePropsType = {
    currenciesName: string[];
    currentCurrency: string;
    currencyRate: number;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
    changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
    changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};
const CurrencyExchange = ({
    currenciesName,
        currentCurrency,
        currencyRate,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
        changeCurrencyField,
        changeAction,
        changeCurrentCurrency, ...props
}: CurrencyExchangePropsType) => {
    const viewCurrency = isBuying
        ? (<>
            <label>
                Вы даете следующую сумму BYN:
                <input value={amountOfBYN}
                       data-currency="byn"
                       onChange={changeCurrencyField}/>
            </label>
            <label>
                Вы получаете следующую сумму {currentCurrency}:
                <input value={amountOfCurrency}
                       data-currency="currency"
                       onChange={changeCurrencyField}/>
            </label>
        </>)
        : (<>
            <label>
                Вы даете следующую сумму {currentCurrency}:
                <input value={amountOfCurrency}
                       data-currency="currency"
                       onChange={changeCurrencyField}/>
            </label>
            <label>
                Вы получаете следующую сумму BYN:
                <input value={amountOfBYN}
                       data-currency="byn"
                       onChange={changeCurrencyField}/>
            </label>
        </>);
    return (
        <div className="currency">
            <h2>Конвертор валют</h2>
            <div className="currency-names">
                <p>Текущая валюта:</p>
                <ul>
                    {currenciesName.map((currency: string, index: number) => {
                        return (<li
                            key={`${index}-${currency}`}
                            className={`currencies ${currentCurrency === currency ? 'activeCurrency' : null}`}
                            onClick={changeCurrentCurrency}
                            data-currency={currency}>
                            {currency}
                        </li>)
                    })}
                </ul>
            </div>
            <div className="currency-action">
                <span className={isBuying
                    ? 'active'
                    : ''} data-action="buy"
                      onClick={changeAction}>Покупка</span>
                <span className={isBuying
                    ? ''
                    : 'active'} data-action="sell"
                      onClick={changeAction}>Продажа</span>
            </div>
            <div className="fields">
                <p>Курс валюты: {currencyRate}</p>
                {viewCurrency}
            </div>
        </div>)
};

export default CurrencyExchange;
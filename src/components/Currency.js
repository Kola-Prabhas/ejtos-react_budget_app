import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CURRENCIES = [
    {
        name: 'Dollar',
        symbol: '$'
    },
    {
        name: 'Pound',
        symbol: '£'
    },
    {
        name: 'Euro',
        symbol: '€'
    },
    {
        name: 'Ruppee',
        symbol: '₹'
    }, 
];



function Currency() {
    const {currency, dispatch} = useContext(AppContext);

    function handleCurrencyChange(e) {
        dispatch({
            type:  'CHG_CURRENCY',
            payload: e.target.value
        })
    }

    return (
        <select value={currency} onChange={handleCurrencyChange} className='alert alert-secondary'>
            {CURRENCIES.map((currency, index) => {
                return <option key={index} value={currency.symbol}>{currency.symbol} {currency.name}</option>
            })}
        </select>
    );
}

export default Currency;
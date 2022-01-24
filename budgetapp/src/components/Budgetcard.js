import React from 'react';
import Progressbar from "./Progressbar";
import Button from "./Button";
import { currencyFormatter } from "./utils";

const Budgetcard = ({ name, amount, max }) => {

    function getColor() {
        let procent = (parseInt(amount) / parseInt(max) * 100);
        if (procent >= 100) {
            return "rgba(255, 0, 0, 0.4)";
        }
    }


    return <div className='budget-card' style={{backgroundColor: getColor()}}>
        <div className="card-header">
            <h3 className="card-title">{ name }</h3>
            <div className="card-amount">
                <h4>{currencyFormatter.format(amount)} / <span className='grey'>{currencyFormatter.format(max)}</span></h4>
            </div>
        </div>
        <Progressbar amount={amount} max={max} />
        <div className="card-button-container">
            <Button classN='secondary' value="Add Budget"/>
            <Button classN='thirdary' value="View Expenses"/>
        </div>
  </div>;
};



export default Budgetcard;

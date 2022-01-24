import React from 'react';
import Button from "./Button";

const Header = () => {
    return <div className="header">
        <h1 className="title">Budget</h1>
        <div className="button-container">
            <Button classN='primary' value="Add Budget"/>
            <Button classN='secondary' value="Add Expense"/>
        </div>
  </div>;
};

export default Header;

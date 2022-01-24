import React from 'react';

const Button = ({classN, value}) => {
    return <button className={classN}>
        {value}
    </button>;
};

export default Button;

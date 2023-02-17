import React from 'react';

const Counter = (props) => {
    console.log(props)
    const {valueIncrease}=props;
    return (
        <div>
            <button onClick={valueIncrease}>Increase@1</button>   
        </div>
    );
};

export default Counter;
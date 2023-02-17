import React from 'react';

const Counter2 = (props) => {
    const {valueIncrease} = props;
    return (
        <div>
            <button onClick={valueIncrease}>Increase@2</button>
        </div>
    );
};

export default Counter2;
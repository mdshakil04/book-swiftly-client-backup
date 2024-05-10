/* eslint-disable no-unused-vars */
import React from 'react';

const CheckoutFrom = () => {
    const handleSubmit = async(event) =>{
        event.preventDefault();
    }
    return (
        <from onSubmit={handleSubmit}>
            
        </from>
    );
};

export default CheckoutFrom;
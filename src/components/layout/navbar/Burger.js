import React from 'react';

const Burger = ({ ...otherProps }) => {
    return (
        <div className='hamburger' {...otherProps}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    );
};

export default Burger;

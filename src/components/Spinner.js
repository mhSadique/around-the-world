import React from 'react';
import spinner from '../assets/images/Spinner-transparent.gif';

const Spinner = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            fontSize: '50px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src={spinner} alt="" />
        </div>
    );
};

export default Spinner;
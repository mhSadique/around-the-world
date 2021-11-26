import React from 'react';
import spinner from '../assets/images/Spinner-transparent.gif';

const SpinnerSimple = () => {
    return (
        <div style={{
            width: '20px',
            height: '20px',
            fontSize: '50px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            marginBottom: '50px',
            marginTop: '50px'
            
        }}>
            <img src={spinner} alt="" />
        </div>
    );
};

export default SpinnerSimple;
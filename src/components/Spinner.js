import React from 'react';

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
            <h1 style={{fontSize: '30px'}}>Loading...</h1>
        </div>
    );
};

export default Spinner;
import React from 'react';

const SpinnerHomePage = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
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

export default SpinnerHomePage;
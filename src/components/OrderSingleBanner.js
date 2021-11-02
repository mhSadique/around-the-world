import React from 'react';
import '../styles/OrderSingleBanner.css';

const OrderSingleBanner = ({packageDetails}) => {
    return (
        <section className="single-package">
        <div className="outermost-container">
            <div className="outer-container">
                <div className="inner-container">
                    <h1>{packageDetails.packageName}</h1>
                    <div className="info-row">
                        <div className="night-stay">
                            <div><span className="number">{packageDetails.numberOfNight}</span><span className="plus">+</span></div>
                            <span className="text">Nights</span>
                        </div>
                        <div className="air">
                            <i className="fas fa-plane"></i>
                            <span className="text">Air</span>
                        </div>
                        <div className="hotel">
                            <i className="fas fa-hotel"></i>
                            <span className="text">Hotel</span>
                        </div>
                    </div>
                    <div className="single-package-rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span className="reviews">See our reviews</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default OrderSingleBanner;
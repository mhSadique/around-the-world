import React from 'react';
import '../styles/HomepageBanner.css';

const HomepageBanner = () => {
    return (
        <section className="banner">
            <div className="outer-container">
                <div className="inner-container">
                    <h2>Limited Time Offers</h2>
                    <div className="banner-rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span className="reviews">See our reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomepageBanner;
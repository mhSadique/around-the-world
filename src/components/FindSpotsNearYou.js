import React from 'react';
import '../styles/FindSpotsNearYou.css'

const FindSpotsNearYou = () => {
    return (
        <section className="spots-near">
        <h2>Discover top spots near you</h2>
        <div className="outer-container">
            <div className="inner-container">
                <div className="spot-single spot-single-1">
                    <button>Available tonight</button>
                </div>
                <div className="spot-single spot-single-2">
                    <button>Available this weekend</button>
                </div>
                <div className="spot-single spot-single-3">
                    <button>Available next weekend</button>
                </div>
                <div className="spot-single spot-single-4">
                    <button>Camping near me</button>
                </div>
                <div className="spot-single spot-single-5">
                    <button>Glamping near me</button>
                </div>
                <div className="spot-single spot-single-6">
                    <button>RV sites near me</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default FindSpotsNearYou;
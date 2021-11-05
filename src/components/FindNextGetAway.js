import React from 'react';
import '../styles/FindNextGetAway.css';

const FindNextGetAway = () => {
    return (
        <section className="next-getaway">
            <h2>Find your next getaway</h2>
            <div className="outer-container">
                <div className="inner-container">
                    <div className="get-away-spot-single">
                        <img src="https://i.ibb.co/ygWkLnJ/joshua-tree.webp" alt=""/>
                        <h3>Joshua Tree</h3>
                        <p>California</p>
                    </div>
                    <div className="get-away-spot-single">
                        <img src="https://i.ibb.co/bmnBLcD/rocky-mountain.webp" alt=""/>
                        <h3>Rocky Mountain</h3>
                        <p>Colorado</p>
                    </div>
                    <div className="get-away-spot-single">
                        <img src="https://i.ibb.co/s2Mbj8V/shenandoah.webp" alt=""/>
                        <h3>Shenadoah</h3>
                        <p>Virginia</p>
                    </div>
                    <div className="get-away-spot-single">
                        <img src="https://i.ibb.co/tMv9W6Q/white-mountain.webp" alt=""/>
                        <h3>White Mountain</h3>
                        <p>Colorado</p>
                    </div>
                    <div className="get-away-spot-single">
                        <img src="https://i.ibb.co/FKksPy6/bryce-canyon.webp" alt=""/>
                        <h3>Bryce Canyon</h3>
                        <p>Utah</p>
                    </div>
                    <div className="get-away-spot-single">
                        <img src="https://i.ibb.co/pZw5rMF/big-bend.webp" alt=""/>
                        <h3>Big Bend</h3>
                        <p>Texas</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindNextGetAway;
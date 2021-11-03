import React from 'react';
import { useHistory } from 'react-router';

const TourSpotSingle = ({packageSingle}) => {
    // console.log(packageSingle);
    const history = useHistory();

    const handleExplore = (id) => {
        history.push(`/place-order/${id}`);
    };
    return (
        <div className="tour-spot-single-container">
            <div className="image">
                <img src={packageSingle.packageImage} alt=""/>
            </div>
            <div className="text-area">
                <h2>{packageSingle.packageName}</h2>
                <p>{packageSingle.packageDescription}</p>
                <div className="package-details-info">
                    <div className="package-starting-station">
                        <span>FROM</span>
                        <span>{packageSingle.packageAirport}</span>
                    </div>
                    <div className="package-cost">
                        <span>$<span className="package-cost-amount">{packageSingle.packagePrice}</span></span>
                        <span className="person-amount">PER PERSON</span>
                    </div>
                    <div className="package-duration">
                        <span className="package-duration-day">{packageSingle.numberOfNight}<span>+</span> </span>
                        <span className="duration-amount">NIGHTS</span>
                    </div>
                    <div className="package-people">
                        <span className="package-people-amount">{packageSingle.packagePeopleIncluded}</span>
                        <span className="people-amount">PEOPLE</span>
                    </div>
                </div>
                {/* <button onClick={() => handleExplore(packageSingle.packageKey)} >Explore</button> */}
                <button onClick={() => handleExplore(packageSingle._id)} >Explore</button>
            </div>
        </div>
    );
};

export default TourSpotSingle;
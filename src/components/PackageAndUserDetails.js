import React from 'react';
import '../styles/PackageAndUserDetails.css';
import RenderListItem from './RenderListItem';
import UserDetails from './UserDetails';

const PackageAndUserDetails = ({ packageDetails }) => {
    return (
        <section className="package-user-details">
            <div className="outer-container">
                <div className="inner-container">
                    <div className="package-details">
                        <h1 className="heading">{packageDetails.packageTitle}</h1>
                        <p className="description"></p>
                        <h3 className="inclusion-heading">What's Included</h3>
                        <ul className="inclusion">
                            {packageDetails.packageFeatureInclusion && packageDetails.packageFeatureInclusion.map(listItem => <RenderListItem listText={listItem} key={listItem} />)}
                        </ul>
                        <h3 className="explore-heading">Great Ways to Explore</h3>
                        <ul className="explore">
                            {packageDetails.packageWaysToExplore && packageDetails.packageWaysToExplore.map(listItem => <RenderListItem listText={listItem} key={listItem} />)}
                        </ul>
                        <p className="conclusion">
                            {packageDetails.packageSummary}
                        </p>

                    </div>
                    <UserDetails packageDetails={packageDetails} />
                </div>
            </div>
        </section>
    );
};

export default PackageAndUserDetails;
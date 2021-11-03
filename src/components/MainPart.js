import React, { useContext } from 'react';
import { PackageDataContext } from '../Contexts/PackageDataContext';
import TourSpotSingle from './TourSpotSingle';

const MainPart = () => {
    const allPackages = useContext(PackageDataContext);

    return (
        <main>
            <div className="tour-spots-container">
                {allPackages
                    .map(packageSingle => <TourSpotSingle
                        // key={packageSingle.packageKey}
                        key={packageSingle._id}
                        packageSingle={packageSingle}
                    />)}
            </div>
        </main>
    );
};

export default MainPart;
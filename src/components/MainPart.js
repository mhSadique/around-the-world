import React, { useContext } from 'react';
import { PackageDataContext } from '../Contexts/PackageDataContext';
import Spinner from './Spinner';
import TourSpotSingle from './TourSpotSingle';

const MainPart = () => {
    const allPackages = useContext(PackageDataContext);

    if (allPackages.length) {
        return (
            <main>
                <div className="tour-spots-container">
                    {allPackages
                        .map(packageSingle => <TourSpotSingle
                            key={packageSingle._id}
                            packageSingle={packageSingle}
                        />)}
                </div>
            </main>
        );
    } else {
        return <Spinner />
    }

    
};

export default MainPart;
import React, { useContext } from 'react';
import { PackageDataContext } from '../Contexts/PackageDataContext';

const AddNewTouristSpot = () => {
    const packageData = useContext(PackageDataContext);
    console.log(packageData);
    return (
        <div>
            <h1>Add New Tourist spot</h1>
            <br/>
            {packageData.map(data => <p key={data.packageKey}>{data.packageName}</p>)}
        </div>
    );
};

export default AddNewTouristSpot;
import React, { useState } from 'react';
import '../styles/AddNewTouristSpot.css';

const AddNewTouristSpot = () => {

    const initialState = {
        packageName: '',
        packageTitle: '',
        packageImage: '',
        packageDescription: '',
        packageAirport: '',
        numberOfNight: '',
        packagePrice: '',
        packagePeopleIncluded: '',
        packageFeatureInclusion: [],
        packageWaysToExplore: [],
        packageSummary: ''
    };

    const [packageInfo, setPackageInfo] = useState(initialState);


    const handleAddNewPackage = (e) => {
        const packageInfoRaw = packageInfo;
        const packageFeaturesString = packageInfoRaw.packageFeatureInclusion;
        const packageExplorationsString = packageInfoRaw.packageWaysToExplore;
        const packageFeaturesArray = packageFeaturesString.split(';')
        const packageExplorationsArray = packageExplorationsString.split(';');

        const newPackageInfo = {
            ...packageInfoRaw,
            packageFeatureInclusion: packageFeaturesArray,
            packageWaysToExplore: packageExplorationsArray
        };

        fetch('https://morning-atoll-31754.herokuapp.com/save-package-details', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackageInfo)
        })
            .then(res => res.json())
            .then(data => {
                setPackageInfo(initialState);
                alert(data)
            })

        e.preventDefault();
    };


    const onInputChange = (e) => {
        const oldPackageInfo = packageInfo;
        const fieldName = e.target.name;
        const newFieldValue = e.target.value;
        const newPackageInfo = { ...oldPackageInfo, [fieldName]: newFieldValue };
        setPackageInfo(newPackageInfo);
    };

    return (
        <div className="new-package-form">
            <h1>Add New Tour Package</h1>

            <form onSubmit={handleAddNewPackage}>
                <label htmlFor="name">Name: </label><br />
                <input
                    type="text"
                    name="packageName"
                    id="name"
                    placeholder="Name"
                    value={packageInfo.packageName}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Title: </label><br />
                <input
                    type="text"
                    name="packageTitle"
                    id="name"
                    placeholder="Title"
                    value={packageInfo.packageTitle}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Image URL: </label><br />
                <input
                    type="text"
                    name="packageImage"
                    id="name"
                    placeholder="Image url"
                    value={packageInfo.packageImage}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Description: </label><br />
                <input
                    type="text"
                    name="packageDescription"
                    id="name"
                    placeholder="Description"
                    value={packageInfo.packageDescription}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Starting Station: </label><br />
                <input
                    type="text"
                    name="packageAirport"
                    id="name"
                    placeholder="Starting point"
                    value={packageInfo.packageAirport}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Package duration: </label><br />
                <input
                    type="number"
                    name="numberOfNight"
                    id="name"
                    placeholder="Day/Night to stay"
                    value={packageInfo.numberOfNight}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Total cost: </label><br />
                <input
                    type="number"
                    name="packagePrice"
                    id="name"
                    placeholder="Total cost"
                    value={packageInfo.packagePrice}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Total people included: </label><br />
                <input
                    type="number"
                    name="packagePeopleIncluded"
                    id="name"
                    placeholder="Total people"
                    value={packageInfo.packagePeopleIncluded}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Package features: </label><br />
                <input
                    type="text"
                    name="packageFeatureInclusion"
                    id="name"
                    placeholder="Put a semi-colon ( ; ) between each package features"
                    value={packageInfo.packageFeatureInclusion}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Ways to explore: </label><br />
                <input
                    type="text"
                    name="packageWaysToExplore"
                    id="name"
                    placeholder="Put a semi-colon ( ; ) between each way to explore"
                    value={packageInfo.packageWaysToExplore}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="name">Summary: </label><br />
                <input
                    type="text"
                    name="packageSummary"
                    id="name"
                    placeholder="Summary"
                    value={packageInfo.packageSummary}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <button type="submit">Add New Package</button>

            </form>

        </div>
    );
};

export default AddNewTouristSpot;
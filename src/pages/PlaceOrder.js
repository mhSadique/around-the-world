import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderSingleBanner from '../components/OrderSingleBanner';
import PackageAndUserDetails from '../components/PackageAndUserDetails';

const PlaceOrder = () => {
    const [packageDetails, setPackageDetails] = useState({});
    const {key} = useParams();

    useEffect(() => {
        fetch('https://shielded-ridge-55542.herokuapp.com')
        .then(res => res.json())
        .then(data => {
            console.log(data, 'from placeorder');
            const orderedPackage = data.find(pckg => pckg.packageKey === +key);
            setPackageDetails(orderedPackage);
        })
    }, [key])

    return (
        <>
            <OrderSingleBanner packageDetails={packageDetails}/>
            <PackageAndUserDetails packageDetails={packageDetails} />
        </>
    );
};

export default PlaceOrder;
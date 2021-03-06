import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderSingleBanner from '../components/OrderSingleBanner';
import PackageAndUserDetails from '../components/PackageAndUserDetails';
import Spinner from '../components/Spinner';

const PlaceOrder = () => {
    const [packageDetails, setPackageDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('https://morning-atoll-31754.herokuapp.com')
            .then(res => res.json())
            .then(data => {
                console.log(data, 'from placeorder');
                const orderedPackage = data.find(pckg => pckg._id === id);
                setPackageDetails(orderedPackage);
            })
    }, [id])

    if (packageDetails._id) {
        return (
            <>
                <OrderSingleBanner packageDetails={packageDetails} />
                <PackageAndUserDetails packageDetails={packageDetails} />
            </>
        );
    } else {
        return (
            <Spinner />
        );
    }

};

export default PlaceOrder;
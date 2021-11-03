import { useEffect, useState } from "react";


// Collect and return data about all the packages 
const usePackageData = () => {
    const [packageData, setPackageData] = useState([]);

    useEffect(() => {
        fetch('https://morning-atoll-31754.herokuapp.com')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPackageData(data);

        })
    }, []);

    return packageData;
};

export default usePackageData;
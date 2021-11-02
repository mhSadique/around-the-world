import React, { createContext } from 'react';
import usePackageData from '../hooks/usePackageData';
const PackageDataContext = createContext();

// Provider of data about all travel the packages
const DataContext = ({children}) => {
    const packagesData = usePackageData();
    return (
        <PackageDataContext.Provider value={packagesData}>
            {children}
        </PackageDataContext.Provider>
    );
};

export default DataContext;
export {PackageDataContext};
import React from 'react';
import FindNextGetAway from '../components/FindNextGetAway';
import FindSpotsNearYou from '../components/FindSpotsNearYou';
import HomepageBanner from '../components/HomepageBanner';
import SidebarAndMainPart from '../components/SidebarAndMainPart';

const Homepage = () => {
    return (
        <>
           <HomepageBanner />
           <SidebarAndMainPart />
           <FindNextGetAway />
           <FindSpotsNearYou />
        </>
    );
};

export default Homepage;
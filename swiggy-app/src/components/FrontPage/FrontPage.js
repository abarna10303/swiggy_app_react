import React from "react";
import Header from "../Header/Header";
import AdBanner from "../AdBanner/AdBanner";
import OnYourMind from "../OnYourMind/OnYourMind";
import Restaurants from "../Restaurants/Restaurants";
// import Popup from "../Popup/Popup";
function FrontPage()
{
    return(
        <>
            <Header />
            <AdBanner />
            <OnYourMind />
            <Restaurants />
            {/* <Popup /> */}
        </>
    );
}
export default FrontPage;
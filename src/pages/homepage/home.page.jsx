import React from 'react';
import SideBar from "../../components/layouts/side-bar/side-bar.component";
import HomepageContent from "../../components/homepage/content.component";
import BrandCarousel from "../../components/homepage/Sections/brands-carousel.component";


function Homepage() {
    return (

         <div className="body-content outer-top-xs" id="top-banner-and-menu">
                    <div className="container">
                        <div className="row">

                            {/*=========================== PAGE SIDEBAR ===========================*/}
                            <SideBar />
                            {/*=========================== END OF PAGE SIDEBAR ====================*/}

                            {/*=========================== HOMEPAGE CONTENT =======================*/}
                            <HomepageContent />
                            {/*=========================== END OF HOMEPAGE CONTENT ================*/}

                        </div>

                        {/*=========================== BRANDS CAROUSEL ===========================*/}
                        <BrandCarousel />
                        {/*=========================== END OF BRANDS CAROUSEL ====================*/}

                    </div>
                </div>

    );
}
export default Homepage;
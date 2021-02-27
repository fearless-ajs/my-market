import React from 'react';
import TopNavigation from "./top-navigation.component";
import HotDeals from "./hot-deals.component";
import SpecaialOffer from "./special-offer.component";
import ProductTags from "./product-tags.component";
import SpecialDeals from "./special-deals.component";
import NewsLetter from "./newsletter.component";
import Testimonials from "./testimonials.component";
import BottomBanner from "./bottom-banner.component";

const SideBar = () => (
    <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
        <TopNavigation />
        <HotDeals />
        <SpecaialOffer />
        <ProductTags />
        <SpecialDeals />
        <NewsLetter />
        <Testimonials />
        <BottomBanner />
    </div>
);
export default SideBar;
import React from 'react';
import HeroSection from "./Sections/hero-section.component";
import InfoBoxesSection from "./Sections/info-boxes-section.component";
import ScrollTabsSection from "./Sections/scroll-tabs-section.component";
import WideProducts from "./Sections/wide-products-section.component";
import FeaturedProducts from "./Sections/featured-products-section.component";
import BestSeller from "./Sections/best-seller-section.component";
import FullWideProducts from "./Sections/full-wide-products-section.component";
import BlogSlider from "./Sections/blog-slider-section.component";

const HomepageContent = () => (

    <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">

        {/*=========================== HERO SECTION ============================*/}
        <HeroSection />
        {/*=========================== END: HERO SECTION =======================*/}

        {/*=========================== INFO BOXES SECTION ======================*/}
        <InfoBoxesSection />
        {/*=========================== END: INFO BOXES SECTION =================*/}

        {/*=========================== SCROLL TABS SECTION =====================*/}
        <ScrollTabsSection />
        {/*/!*=========================== END: SCROLL TABS SECTION ================*!/*/}

        {/*=========================== WIDE PRODUCTS SECTION ===================*/}
        <WideProducts />
        {/*=========================== END: WIDE PRODUCTS SECTION ==============*/}

        {/*=========================== FEATURED PRODUCTS SECTION ===============*/}
        <FeaturedProducts />
        {/*=========================== END: FEATURED PRODUCTS SECTION ==========*/}

        {/*=========================== WIDE PRODUCTS SECTION ===================*/}
        <FullWideProducts />
        {/*=========================== END: WIDE PRODUCTS SECTION ==============*/}

        {/*=========================== BEST SELLER SECTION =====================*/}
        <BestSeller />
        {/*=========================== END:BEST SELLER SECTION ================*/}

        {/*=========================== BLOG SLIDER SECTION ====================*/}
        <BlogSlider />
        {/*=========================== END: BLOG SLIDER SECTION ===============*/}

        {/*/!*=========================== FEATURED PRODUCTS SECTION ==============*!/*/}
        {/*<FeaturedProducts />*/}
        {/*/!*=========================== END: FEATURED PRODUCTS SECTION ==========*!/*/}


    </div>
);
export default HomepageContent;
import React from 'react';
import TopHeader from "./top-header.component";
import MainHeader from "./main-header.component";
import NavBar from "../nav-bar/nav-bar.component";

const Header = () => (

    <header className="header-style-1">
         <TopHeader />
         <MainHeader />
         <NavBar />
    </header>

);

export default Header;
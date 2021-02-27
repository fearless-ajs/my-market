import React from 'react';

const MainHeader = () => (
    <div className="main-header">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                     <div className="logo"><a href="home.html"> <img src="assets/images/logo.png" alt="logo" /> </a></div>
                    </div>

                <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                    <div className="search-area">
                        <form>
                            <div className="control-group">
                                <ul className="categories-filter animate-dropdown">
                                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown"
                                                                href="category.html">Categories <b
                                        className="caret"></b></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className="menu-header">Computer</li>
                                            <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                       href="category.html">- Clothing</a></li>
                                            <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                       href="category.html">- Electronics</a></li>
                                            <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                       href="category.html">- Shoes</a></li>
                                            <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                       href="category.html">- Watches</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <input className="search-field" placeholder="Search here..."/>
                                <a className="search-button" href="#"></a></div>
                        </form>
                    </div>
                 </div>

                <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">

                    <div className="dropdown dropdown-cart"><a href="#" className="dropdown-toggle lnk-cart"
                                                               data-toggle="dropdown">
                        <div className="items-cart-inner">
                            <div className="basket"><i className="glyphicon glyphicon-shopping-cart"></i></div>
                            <div className="basket-item-count"><span className="count">2</span></div>
                            <div className="total-price-basket"><span className="lbl">cart -</span> <span
                                className="total-price"> <span className="sign">$</span><span
                                className="value">600.00</span> </span></div>
                        </div>
                    </a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="cart-item product-summary">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <div className="image"><a href="detail.html"><img
                                                src="assets/images/cart.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-xs-7">
                                            <h3 className="name"><a href="index8a95.html?page-detail">Simple Product</a>
                                            </h3>
                                            <div className="price">$600.00</div>
                                        </div>
                                        <div className="col-xs-1 action"><a href="#"><i className="fa fa-trash"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix"></div>
                                <hr />
                                    <div className="clearfix cart-total">
                                        <div className="pull-right"><span className="text">Sub Total :</span><span
                                            className='price'>$600.00</span></div>
                                        <div className="clearfix"></div>
                                        <a href="checkout.html"
                                           className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a></div>


                            </li>
                        </ul>

                    </div>
                     </div>

            </div>


        </div>


    </div>
);
export default MainHeader;
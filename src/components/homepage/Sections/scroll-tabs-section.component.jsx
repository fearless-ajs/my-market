import React from 'react';

const ScrollTabsSection = () => (

    <div id="product-tabs-slider" className="scroll-tabs outer-top-vs wow fadeInUp">
        <div className="more-info-tab clearfix ">
            <h3 className="new-product-title pull-left">New Products</h3>
            <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
                <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
                <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
                <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
            </ul>

        </div>
        <div className="tab-content outer-top-xs">
            <div className="tab-pane in active" id="all">
                <div className="product-slider">
                    <div className="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="4">
                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p1.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button data-toggle="tooltip" className="btn btn-primary icon"
                                                            type="button" title="Add Cart"><i
                                                        className="fa fa-shopping-cart"></i></button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a data-toggle="tooltip"
                                                                                className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a data-toggle="tooltip" className="add-to-cart"
                                                                       href="detail.html" title="Compare"> <i
                                                    className="fa fa-signal" aria-hidden="true"></i> </a></li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p2.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p4.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p3.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p30.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p29.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}
                    </div>
                    {/*// <!-- /.home-owl-carousel -->*/}
                </div>
                {/*// <!-- /.product-slider -->*/}
            </div>
            {/*// <!-- /.tab-pane -->*/}

            <div className="tab-pane" id="smartphone">
                <div className="product-slider">
                    <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p5.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p6.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p7.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p8.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p9.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p10.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}
                    </div>
                    {/*// <!-- /.home-owl-carousel -->*/}
                </div>
                {/*// <!-- /.product-slider -->*/}
            </div>
            {/*// <!-- /.tab-pane -->*/}

            <div className="tab-pane" id="laptop">
                <div className="product-slider">
                    <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p11.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p12.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p13.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p14.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p15.jpg" alt="image" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p16.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Apple Iphone 5s 32GB</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}
                    </div>
                    {/*// <!-- /.home-owl-carousel -->*/}
                </div>
                {/*// <!-- /.product-slider -->*/}
            </div>
            {/*// <!-- /.tab-pane -->*/}

            <div className="tab-pane" id="apple">
                <div className="product-slider">
                    <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p18.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p18.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p17.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag sale"><span>sale</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p16.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p13.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag new"><span>new</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}

                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image"><a href="detail.html"><img
                                            src="assets/images/products/p14.jpg" alt="" /></a></div>
                                        {/*// <!-- /.image -->*/}

                                        <div className="tag hot"><span>hot</span></div>
                                    </div>
                                    {/*// <!-- /.product-image -->*/}

                                    <div className="product-info text-left">
                                        <h3 className="name"><a href="detail.html">Samsung Galaxy S4</a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        <div className="product-price"><span className="price"> $450.99 </span> <span
                                            className="price-before-discount">$ 800</span></div>
                                        {/*// <!-- /.product-price -->*/}

                                    </div>
                                    {/*// <!-- /.product-info -->*/}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button className="btn btn-primary icon" data-toggle="dropdown"
                                                            type="button"><i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to
                                                        cart
                                                    </button>
                                                </li>
                                                <li className="lnk wishlist"><a className="add-to-cart"
                                                                                href="detail.html" title="Wishlist"> <i
                                                    className="icon fa fa-heart"></i> </a></li>
                                                <li className="lnk"><a className="add-to-cart" href="detail.html"
                                                                       title="Compare"> <i className="fa fa-signal"
                                                                                           aria-hidden="true"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*// <!-- /.action -->*/}
                                    </div>
                                    {/*// <!-- /.cart -->*/}
                                </div>
                                {/*// <!-- /.product -->*/}

                            </div>
                            {/*// <!-- /.products -->*/}
                        </div>
                        {/*// <!-- /.item -->*/}
                    </div>
                    {/*// <!-- /.home-owl-carousel -->*/}
                </div>
                {/*// <!-- /.product-slider -->*/}
            </div>
            {/*// <!-- /.tab-pane -->*/}

        </div>
        {/*// <!-- /.tab-content -->*/}
    </div>
);
export default ScrollTabsSection;
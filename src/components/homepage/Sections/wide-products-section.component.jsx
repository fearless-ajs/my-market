import React from 'react';

const WideProducts = () => (

    <div className="wide-banners wow fadeInUp outer-bottom-xs">
        <div className="row">
            <div className="col-md-7 col-sm-7">
                <div className="wide-banner cnt-strip">
                    <div className="image"><img className="img-responsive" src="assets/images/banners/home-banner1.jpg"
                                                alt="" /></div>
                </div>
                {/*// <!-- /.wide-banner -->*/}
            </div>
            {/*// <!-- /.col -->*/}
            <div className="col-md-5 col-sm-5">
                <div className="wide-banner cnt-strip">
                    <div className="image"><img className="img-responsive" src="assets/images/banners/home-banner2.jpg"
                                                alt="" /></div>
                </div>
                {/*// <!-- /.wide-banner -->*/}
            </div>
            {/*// <!-- /.col -->*/}
        </div>
        {/*// <!-- /.row -->*/}
    </div>
);
export default WideProducts;
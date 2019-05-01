import React from 'react';
import TextLogo from '../../../img/LandMonk-Text-Only-Logo.png';
import { Link } from 'react-router-dom';

const internalServer = () => {
    return (
        <div className="account-pages mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-pattern">

                            <div className="card-body p-4">

                                <div className="text-center">
                                    <Link to='/'>
                                        <span><img src={TextLogo} alt="LandMonk" height="18" /></span>
                                    </Link>
                                </div>

                                <div className="text-center mt-4">
                                    <h1 className="text-error">500</h1>
                                    <h3 className="mt-3 mb-2">Internal Server Error</h3>

                                    <Link to='/'><button className="btn btn-success waves-effect waves-light">Back to Home</button></Link>
                                </div>

                            </div>
                            {/* <!-- end card-body --> */}
                        </div>
                        {/* <!-- end card --> */}

                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
        // <!-- end page -->
     );
}

export default internalServer;
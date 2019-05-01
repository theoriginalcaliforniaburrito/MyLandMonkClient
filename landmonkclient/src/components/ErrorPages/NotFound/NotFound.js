import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        <div className="wrapper">
            <div className="container-fluid">

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-4 mb-4">
                        <div className="text-center">
                            <h1>404</h1>
                            <h3 className="mt-0 mb-2">Whoops! Page not found </h3>

                            <Link to={'/'}><button className="btn btn-success waves-effect waves-light">Back to Dashboard</button></Link>
                        </div>
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}

            </div>
            {/* <!-- end container --> */}
        </div>
    )
}

export default NotFound;
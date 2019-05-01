import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Property from '../../../components/PropertyComponents/Property/Property'
import { connect } from 'react-redux'
import * as repositoryActions from '../../../store/actions/repositoryActions'

class PropertyList extends Component {
    componentDidMount = () => {
        let url = '/api/property';
        this.props.onGetData(url, { ...this.props });
    }


    render() {
        let properties = [];
        if (this.props.data && this.props.data.length > 0) {
            properties = this.props.data.map((property) => {
                return (
                    <Property key={property.id} property={property} {...this.props} />
                )
            })
        }

        return (
            <div className="wrapper">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <Link to='/createProperty'>
                                        <button className="btn btn-primary">Add Property</button>
                                    </Link>
                                </div>
                                <h4 className="page-title">Properties</h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    { properties }

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.repository.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url,
            props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);
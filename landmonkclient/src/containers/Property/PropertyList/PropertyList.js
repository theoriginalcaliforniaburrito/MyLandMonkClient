import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Property from '../../../components/PropertyComponents/Property/Property'
import { connect } from 'react-redux'
import * as repositoryActions from '../../../store/actions/repositoryActions'

class PropertyList extends Component {

    state = {

        propertyFilter: []
    }


    componentDidMount = () => {
        let url = '/api/property';
        this.props.onGetData(url, { ...this.props });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({

            propertyFilter: nextProps.data

        });

    }

    handleChange = e => {

        let currentProperty = [];
        let newProperty = [];

        if (e.target.value.trim() !== '') {
            currentProperty = this.props.data;

            newProperty = currentProperty.filter(input => {

                const pn = input.propertyName.toLowerCase();
                const address = input.address.toLowerCase();
                const city = input.city.toLowerCase();
                const zip = input.zipCode;
                
                const filter = e.target.value.toLowerCase();
                
              
        
                return pn.includes(filter) || address.includes(filter) 
                || city.includes(filter) || zip.includes(filter)
            
                
            });

        }
        else {
            newProperty = this.props.data;
        }

        this.setState({
            propertyFilter: newProperty
        });

    }


    render() {
        let properties = [];
        if (this.state.propertyFilter && this.state.propertyFilter.length > 0) {
            properties = this.state.propertyFilter.map((property) => {
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
                                <div className="search">
                                <input type="text" className="searchBar" onChange={this.handleChange} placeholder="Search Properities..." />
                                </div>
                                <h4 className="page-title">Properties</h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    {properties}



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
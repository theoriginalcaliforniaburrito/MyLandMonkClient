import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';


class CreateUnit extends Component {
    state = {  
        unitForm: {
            unitName: '',
            bedroomCount: '',
            bathroomCount:'',
            squareFootage:'',
            propertyId:''
        }
    }

    handleChangeEvent = event => {
        const updatedUnitForm = { ...this.state.unitForm }; 
        updatedUnitForm[event.target.id] = event.target.value;

        this.setState(
            {
                unitForm: updatedUnitForm
            }
        )
    }

    createUnit = event => {
        event.preventDefault();
        
        const unitToCreate = {
            unitName: this.state.unitForm.unitName,
            bedroomCount: this.state.unitForm.bedroomCount,
            bathroomCount: this.state.unitForm.unitName,
            squareFootage: this.state.unitForm.squareFootage,
            propertyId: this.state.unitForm.propertyId,
        }

        const url = '/api/units'
        this.props.onCreateUnit(url, unitToCreate, { ...this.props});        
    }


    render() { 
        return (
          <div className="wrapper">
          
          </div>
          );
    }
}
 
export default CreateUnit;
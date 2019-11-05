import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let currentValue = '';

const Inputs = (props) => {

    const handleChange = e => {
        if (!(e.target.name === 'description') && !(e.target.name === 'date')) {
            if (currentValue.length > 0 && currentValue !== e.target.name) {
                toast.warn('Action not possible');
                return;
            }
            if (e.target.value <= 0) {
                currentValue = '';
            } else {
                currentValue = e.target.name
            }
        }
        props.changeValues({ [e.target.name]: e.target.value });
    }

    const addToBook = () => {
        if (currentValue.length <= 0 || props.description.length <= 0) {
            toast.warn("At least. You should provide 'Date', 'Description' and corresponding amount");
            return;
        }
        currentValue = '';
        props.addToBook();
    }

    return (
        <tr>
            <td className='bd'><input onChange={handleChange} style={{ width: '70px' }} type='date' data-date-format="DD MM" placeholder='Enter Date' name='date' value={props.date} /></td>
            <td className='bd'><input onChange={handleChange} type="text" value={props.description} placeholder="Provide description" name='description' /></td>
            <td className='bd'>{props.tr_ref + 1}</td>
            <td className='bd'><input onChange={handleChange} type='number' value={props.sales} name='sales' placeholder='Sales' /></td>
            <td className='bd'><input onChange={handleChange} type='number' value={props.bank_interest} name='bank_interest' placeholder='Bank' /></td>
            <td className='bd'>&nbsp;</td>
            <td className='bd'><input onChange={handleChange} type='number' value={props.stationary} name='stationary' placeholder='Stationary' /></td>
            <td className='bd'><input onChange={handleChange} type='number' value={props.office_equipment} name='office_equipment' placeholder='Equipments' /></td>
            <td className='bd'><input onChange={handleChange} type='number' value={props.internet} name='internet' placeholder='Internet' /></td>
            <td className='bd'><input onChange={handleChange} type='number' value={props.drawings} name='drawings' placeholder='Drawings' /></td>
            <td className='bd'><input onChange={handleChange} type='number' value={props.bank_fees} name='bank_fees' placeholder='Bank' /></td>
            <td className='bd' colSpan='3'><ToastContainer /><button className="btn btn-small waves-effect waves-light" style={{ width: '100%' }} onClick={addToBook}><i className="material-icons">add</i></button></td>
        </tr>
    )
}


const mapToProps = state => {
    return { ...state.idata }
}

const dispatchToProps = dispatch => {
    return {
        changeValues: values => dispatch({ type: 'CHANGE_VALUES', payload: values }),
        addToBook: () => dispatch({ type: 'ADD_TO_BOOKS' })
    };
}
export default connect(mapToProps, dispatchToProps)(Inputs);
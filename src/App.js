import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let initialState = {
  currentBalance:0,
  totals:{
    sales: 0,
    bank_interest: 0,
    total_in: 0,
    stationary: 0,
    office_equipment: 0,
    internet: 0,
    drawings: 0,
    bank_fees: 0,
    total_out: 0,
    bank_balance: 0

  },
  cashbook:[],
    idata : {
      date:'',
      description:'',
      tr_ref:1,
      sales:'',
      bank_interest:'',
      total_in:'',
      stationary:'',
      office_equipment:'',
      internet:'',
      drawings:'',
      bank_fees:'',
      total_out:'',
      bank_balance:''
    }
}

const genReducer = (state=initialState,action) =>{
  switch(action.type) {
    case 'CHANGE_VALUES':
      return { ...state, idata: {...state.idata,...action.payload}}
    case 'ADD_TO_BOOKS':
      let idata = {
        date: '',
        description: '',
        tr_ref: '',
        sales: '',
        bank_interest: '',
        total_in: '',
        stationary: '',
        office_equipment: '',
        internet: '',
        drawings: '',
        bank_fees: '',
        total_out: '',
        bank_balance: ''}
        let tmpData = state.idata;
        if (state.idata.sales > 0 || state.idata.bank_interest > 0) {
          tmpData.bank_balance += state.idata.sales + state.idata.bank_interest;
        } else {
          tmpData.bank_balance -= state.idata.stationary - state.idata.office_equipment - state.idata.internet - state.idata.drawings -state.idata.bank_fees;
        }
      return { ...state, cashbook: [...state.cashbook, tmpData],idata}
    default:
      return { ...state }
  }
}

const store = createStore(genReducer);

function App() {
  return (
    <div className='container'>
        <div><img src="logo.png" alt="Company logo" width="15%" /></div>
        <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Provider store={store}>
            <Route path='/' component={Main} />
          </Provider>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

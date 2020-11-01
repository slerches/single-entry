import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { Provider } from "react-redux";
import { createStore } from "redux";

let initialState = {
  uname: "",
  userSet: false,
  currentBalance: 0,
  totals: {
    sales: 0,
    bank_interest: 0,
    total_in: 0,
    stationary: 0,
    office_equipment: 0,
    internet: 0,
    drawings: 0,
    bank_fees: 0,
    total_out: 0,
    bank_balance: 0,
  },
  cashbook: [],
  idata: {
    date: "",
    description: "",
    tr_ref: 0,
    sales: "",
    bank_interest: "",
    total_in: "",
    stationary: "",
    office_equipment: "",
    internet: "",
    drawings: "",
    bank_fees: "",
    total_out: "",
    bank_balance: "",
  },
};

const genReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN_VARS":
      return {
        ...state,
        ...action.payload,
        cashbook: [
          {
            total_in: Number(action.payload.currentBalance),
            description: "Balance B/F",
            bank_balance: Number(action.payload.currentBalance),
            date: new Date(),
          },
        ],
        totals: {
          ...state.totals,
          total_in: Number(action.payload.currentBalance),
          bank_balance: Number(action.payload.currentBalance),
        },
      };
    case "CHANGE_VALUES":
      return { ...state, idata: { ...state.idata, ...action.payload } };
    case "ADD_TO_BOOKS":
      let idata = {
        date: "",
        description: "",
        tr_ref: state.idata.tr_ref + 1,
        sales: "",
        bank_interest: "",
        total_in: 0,
        stationary: "",
        office_equipment: "",
        internet: "",
        drawings: "",
        bank_fees: "",
        total_out: 0,
        bank_balance: "",
      };

      let totals = state.totals;

      let tmpData = state.idata;
      if (state.idata.sales > 0 || state.idata.bank_interest > 0) {
        tmpData.total_in = parseFloat(
          state.idata.sales + state.idata.bank_interest
        );
        tmpData.bank_balance = parseFloat(
          state.currentBalance + tmpData.total_in
        );
      } else {
        tmpData.total_out = parseFloat(
          state.idata.stationary +
            state.idata.office_equipment +
            state.idata.internet +
            state.idata.drawings +
            state.idata.bank_fees
        );
        tmpData.bank_balance = parseFloat(
          state.currentBalance - tmpData.total_out
        );
      }
      tmpData.tr_ref += 1;

      totals.sales += Number(state.idata.sales);
      totals.bank_interest += Number(state.idata.bank_interest);
      totals.total_in += Number(tmpData.total_in);
      totals.stationary += Number(state.idata.stationary);
      totals.office_equipment += Number(state.idata.office_equipment);
      totals.internet += Number(state.idata.internet);
      totals.drawings += Number(state.idata.drawings);
      totals.bank_fees += Number(state.idata.bank_fees);
      totals.total_out += Number(tmpData.total_out);
      totals.bank_balance = Number(tmpData.bank_balance);
      console.log(totals);

      return {
        ...state,
        cashbook: [...state.cashbook, tmpData],
        idata,
        currentBalance: tmpData.bank_balance,
        totals,
      };
    default:
      return { ...state };
  }
};

const store = createStore(genReducer);

function App() {
  return (
    <div className="container">
      <div>
        <img src="logo.png" alt="Company logo" width="15%" />
      </div>
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Main} />
          </Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

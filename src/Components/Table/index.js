import React from "react";
import accounting from "accounting";
import moment from "moment";

const firstColumnWidth = "30%";
const secondColumnWidth = "25%";
const thirdColumnWidth = "35%";
const DetailsHeader = () => {
  return (
    <div className="row">
      <div className="col-4">Date</div>
      <div className="col-7">Description</div>
      <div>Ref</div>
    </div>
  );
};

const MoneyInHeader = () => {
  return (
    <div className="row">
      <div className="col-3">Sales</div>
      <div className="col-5">Bank Interest</div>
      <div className="col">Total In</div>
    </div>
  );
};

const MoneyOutHeader = () => {
  return (
    <div className="row">
      <div className="col">Expenses</div>
      <div className="col">Drawings</div>
      <div className="col">Bank Fees</div>
      <div className="col">Total Out</div>
    </div>
  );
};
const TableFrame = (props) => {
  return (
    <div className="col-12">
      <div className="list-group">
        <div className="list-group-item list-group-item-action bg-dark text-white m-0 p-0">
          <div className="row m-0 p-0">
            <div
              className="border-right border-white p-1"
              style={{ width: firstColumnWidth }}
            >
              Details
            </div>
            <div
              className="border-right border-white p-1"
              style={{ width: secondColumnWidth }}
            >
              Money In
            </div>
            <div
              className="border-right border-white p-1"
              style={{ width: thirdColumnWidth }}
            >
              Money Out
            </div>
            <div className="p-1"></div>
          </div>
        </div>
        <div className="list-group-item list-group-item-action m-0 p-0">
          <div className="row m-0 p-0 text-bold">
            <div
              className="border-right border-dark p-2"
              style={{ width: firstColumnWidth }}
            >
              <DetailsHeader />
            </div>
            <div
              className="border-right border-dark p-2"
              style={{ width: secondColumnWidth }}
            >
              <MoneyInHeader />
            </div>
            <div
              className="border-right border-dark p-2"
              style={{ width: thirdColumnWidth }}
            >
              <MoneyOutHeader />
            </div>
            <div className="p-2">
              <div className="row pl-2">
                <div>Bank Balance</div>
                <div className="pl-2">R</div>
              </div>
            </div>
          </div>
        </div>

        {props.children}
      </div>
    </div>
  );
};

const TableBody = (props) => {
  return (
    <div className="list-group-item list-group-item-action disabled m-0 p-0">
      <div className="row m-0 p-0">
        <div
          className="border-right border-dark"
          style={{ width: firstColumnWidth }}
        >
          <div className="row">
            <div className="col-4">
              {moment(props.date.toString()).format("MM-DD-YY")}
            </div>
            <div className="col-7">{props.description}</div>
            <div>{props.tr_ref}</div>
          </div>
        </div>
        <div
          className="border-right border-dark"
          style={{ width: secondColumnWidth }}
        >
          <div className="row">
            <div className="col-3">
              {accounting.formatMoney(props.sales, "₵")}
            </div>
            <div className="col-5">
              {accounting.formatMoney(props.bank_interest, "₵")}
            </div>
            <div className="col">
              {accounting.formatMoney(props.total_in, "₵")}
            </div>
          </div>
        </div>
        <div
          className="border-right border-dark"
          style={{ width: thirdColumnWidth }}
        >
          <div className="row">
            <div className="col">
              {accounting.formatMoney(props.office_equipment, "₵")}
            </div>
            <div className="col">
              {accounting.formatMoney(props.drawings, "₵")}
            </div>
            <div className="col">
              {accounting.formatMoney(props.bank_fees, "₵")}
            </div>
            <div className="col">
              {accounting.formatMoney(props.total_out, "₵")}
            </div>
          </div>
        </div>
        <div style={{ width: "10%" }}>
          <div className="d-flex justify-content-between">
            <div>{accounting.formatMoney(props.bank_balance, "₵")}</div>
            <div className="m-0 p-0">R</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TotalDisplay = (props) => (
  <div className="list-group-item list-group-item-action disabled m-0 p-0">
    <div className="row m-0 p-0 text-bold">
      <div
        className="border-right border-dark"
        style={{ width: firstColumnWidth }}
      >
        Totals
      </div>
      <div
        className="border-right border-dark"
        style={{ width: secondColumnWidth }}
      >
        <div className="row">
          <div className="col-3">
            {accounting.formatMoney(props.sales, "₵")}
          </div>
          <div className="col-5">
            {accounting.formatMoney(props.bank_interest, "₵")}
          </div>
          <div className="col">
            {accounting.formatMoney(props.total_in, "₵")}
          </div>
        </div>
      </div>
      <div
        className="border-right border-dark"
        style={{ width: thirdColumnWidth }}
      >
        <div className="row">
          <div className="col">
            {accounting.formatMoney(props.office_equipment, "₵")}
          </div>
          <div className="col">
            {accounting.formatMoney(props.drawings, "₵")}
          </div>
          <div className="col">
            {accounting.formatMoney(props.bank_fees, "₵")}
          </div>
          <div className="col">
            {accounting.formatMoney(props.total_out, "₵")}
          </div>
        </div>
      </div>
      <div style={{ width: "10%" }}>
        <div className="d-flex justify-content-between">
          <div>{accounting.formatMoney(props.bank_balance, "₵")}</div>
          <div className="m-0 p-0">C/F</div>
        </div>
      </div>
    </div>
  </div>
);
export { TableFrame, TableBody, TotalDisplay };

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

let currentValue = "";

const Inputs = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const addToBook = () => {
    // if (
    //   currentValue.length <= 0 ||
    //   props.description.length <= 0 ||
    //   props.date.length <= 0
    // ) {
    //   toast.info(
    //     "At least. You should provide 'Date', 'Description' and corresponding amount"
    //   );
    //   return;
    // }
    // currentValue = "";
    props.addToBook();
  };
  useEffect(() => {
    const el = document.getElementsByClassName("react-datepicker-wrapper");
    el[0].classList.add("col-4");
    el[0].classList.add("ml-3");
    props.changeValues({ date: new Date() });
  }, []);
  return (
    <div className="list-group-item list-group-item-action m-0 p-0">
      <div className="row m-0 p-0">
        <div className="border-right border-dark" style={{ width: "30%" }}>
          <div className="row">
            <DatePicker
              className="col p-0 m-0 border-0"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                props.changeValues({ date: date });
              }}
            />
            <div
              className="col-6 m-0 p-0"
              contentEditable="true"
              onKeyUp={(e) =>
                props.changeValues({ description: e.target.innerText })
              }
              placeholder={"Description"}
            ></div>
            <div className="col">{props.tr_ref + 1}</div>
          </div>
        </div>
        <div className="border-right border-dark" style={{ width: "25%" }}>
          <div className="row">
            <div
              className="col-2  m-0 p-0 pl-2 ml-3"
              onKeyUp={(e) => props.changeValues({ sales: e.target.innerText })}
              contentEditable="true"
              name="sales"
              placeholder={"Sales"}
            ></div>
            <div
              className="col-4 ml-3"
              onKeyUp={(e) =>
                props.changeValues({ bank_interest: e.target.innerText })
              }
              contentEditable="true"
              placeholder={"B/Interest"}
            ></div>
            <div className="col"></div>
          </div>
        </div>
        <div className="border-right border-dark" style={{ width: "35%" }}>
          <div className="row">
            <div
              className="col ml-3"
              onKeyUp={(e) =>
                props.changeValues({ office_equipment: e.target.innerText })
              }
              contentEditable="true"
              placeholder={"Expense"}
            ></div>
            <div
              className="col ml-2"
              onKeyUp={(e) =>
                props.changeValues({ drawings: e.target.innerText })
              }
              contentEditable="true"
              placeholder={"Drawings"}
            ></div>
            <div
              className="col ml-2"
              onKeyUp={(e) =>
                props.changeValues({ bank_fees: e.target.innerText })
              }
              contentEditable="true"
              placeholder={"Bank Fees"}
            ></div>
            <div className="col"></div>
          </div>
        </div>
        <div style={{ width: "10%" }}>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary btn-sm"
              style={{ width: "100%", height: 20 }}
              onClick={addToBook}
            >
              <i className="material-icons" style={{ fontSize: "1rem" }}>
                add
              </i>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    // <tr style={{ fontSize: '10px', height: '10px' }}>
    //     <td className='bd'><input onChange={handleChange} style={{ width: '70px' }} type='date' placeholder='Enter Date' data-date-format="DD-MM" name='date' value={props.date} /></td>
    //     <td className='bd'><input onChange={handleChange} type="text" value={props.description} placeholder="Provide description" name='description' /></td>
    //     <td className='bd'>{props.tr_ref+1}</td>
    //     <td className='bd'><input onChange={handleChange} type='number' value={props.sales} name='sales' placeholder='Sales' /></td>
    //     <td className='bd'><input onChange={handleChange} type='number' value={props.bank_interest} name='bank_interest' placeholder='Bank' /></td>
    //     <td className='bd'>&nbsp;</td>
    //     <td className='bd'><input onChange={handleChange} type='number' value={props.stationary} name='stationary' placeholder='Stationary' /></td>
    //     <td className='bd'><input onChange={handleChange} type='number' value={props.office_equipment} name='office_equipment' placeholder='Equipments' /></td>
    //     <td className='bd'><input onChange={handleChange} type='number' value={props.internet} name='internet' placeholder='Internet' /></td>
    //     <td className='bd'><input onChange={handleChange} type='number' value={props.drawings} name='drawings' placeholder='Drawings' /></td>
    //     <td className='bd'><input onChange={handleChange} type='number' value={props.bank_fees} name='bank_fees' placeholder='Bank' /></td>
    //     <td className='bd' colSpan='3'><button className="btn btn-small waves-effect waves-light" style={{ width: '100%' }} onClick={addToBook}><i className="material-icons">add</i></button></td>
    // </tr>
  );
};

const mapToProps = (state) => {
  return { ...state.idata };
};

const dispatchToProps = (dispatch) => {
  return {
    changeValues: (values) =>
      dispatch({ type: "CHANGE_VALUES", payload: values }),
    addToBook: () => dispatch({ type: "ADD_TO_BOOKS" }),
  };
};
export default connect(mapToProps, dispatchToProps)(Inputs);

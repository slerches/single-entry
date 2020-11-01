import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Login = (props) => {
  const [login, setLogin] = React.useState(false);
  const uname = React.createRef(null);
  const bf = React.createRef(null);

  const ready = (e) => {
    e.preventDefault();
    if (uname.current.value.lentgh <= 0 || bf.current.value.lentgh <= 0) {
      alert("Please provide Your name and opening balance");
      return;
    }
    props.setLogin({
      uname: uname.current.value,
      currentBalance: Number(bf.current.value),
      userSet: true,
    });
    setLogin(true);
  };

  return (
    <>
      {login ? (
        <Redirect to="/" />
      ) : (
        <div className="d-flex justify-content-center">
          <div className="card">
            <form onSubmit={ready}>
              <div className="form-group">
                <input
                  id="uname"
                  className="form-control"
                  type="text"
                  placeholder="Your name"
                  ref={uname}
                />
              </div>
              <div className="form-group">
                <input
                  id="bf"
                  className="form-control"
                  type="number"
                  placeholder="Baclance B/F GHC 3,500"
                  ref={bf}
                />
              </div>
              <div className="text-right">
                <button
                  className="btn btn-primary"
                  style={{ marginBottom: "10px" }}
                >
                  Begin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const dispathToProps = (dispatch) => {
  return {
    setLogin: (values) => dispatch({ type: "SET_LOGIN_VARS", payload: values }),
  };
};

export default connect(null, dispathToProps)(Login);

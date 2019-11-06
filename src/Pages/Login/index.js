import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {

    const [login, setLogin] = React.useState(false);
    const uname = React.createRef(null);
    const bf = React.createRef(null);

    const ready = (e) => {
        e.preventDefault();
        if (uname.current.value.lentgh <= 0 || bf.current.value.lentgh <= 0) {
            alert('Please provide Your name and opening balance');
            return;
        }
        props.setLogin({ uname: uname.current.value, currentBalance: Number(bf.current.value), userSet: true });
        setLogin(true);
    }

    return (
        <>
            {
                login ? <Redirect to='/' /> :
                    <div className='card'>
                        <form onSubmit={ready}>
                            <div>
                                <input id='uname' ref={uname} type='text' placeholder="Your Name" />
                            </div>
                            <div>
                                <input id='bf' ref={bf} type='number' placeholder="Baclance B/F GHC 3,500" />
                            </div>
                            <div className='right-align'>
                                <button className='btn right-align' style={{ marginBottom: '10px' }}>Begin</button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}

const dispathToProps = dispatch => {
    return {
        setLogin: (values) => dispatch({ type: 'SET_LOGIN_VARS', payload: values })
    }
}

export default connect(null, dispathToProps)(Login);

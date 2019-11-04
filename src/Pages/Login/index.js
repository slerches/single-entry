import React from 'react';

const Login = () => {
    return (
        <div className='card'>
            <form>
                <div>
                    <input id='uname' type='text' placeholder="Your Name" />
                </div>
                <div className='right-align'>
                    <button className='btn right-align' style={{ marginBottom: '10px' }}>Begin</button>
                </div>
            </form>
        </div>
    )
}

export default Login;

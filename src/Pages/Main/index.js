import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { TableFrame, TableBody, TotalDisplay } from '../../Components/Table';
import Inputs from '../../Components/Inputs';

const Main = (props) => {
    const [companyData, setCompanyData] = useState({});
    const [status, setStatus] = useState('');

    React.useEffect(() => {
        fetch('/tempData/companyData.json')
            .then(response => response.json())
            .then(data => {
                setCompanyData(data);
            })
            .catch(e => {
                console.log(e);
            });
    }, [])

    return (
        <>
        {!props.userSet && <Redirect to='/login' />}
            <div className="row">
                <div className="row">
                    <div className="col m12">Welcome: {props.uname}</div>
                </div>
                <div className="row">
                    <div className="col m2">CASHBOOK</div>
                    <div className="col m4">{companyData.companyName}</div>
                </div>
                <div className="row">
                    <TableFrame>
                        {
                            props.cashbook.map((cashbook, index) => {
                                return <TableBody key={index} {...cashbook} />
                            })
                        }
                        {props.cashbook.length <= 12 && <Inputs />}
                        <TotalDisplay {...props.totals} />
                    </TableFrame>
                </div>
            </div>
        </>
    )
}

const mapToProps = state => {
    return {
        cashbook: state.cashbook,
        totals: state.totals,
        userSet:state.userSet,
        uname:state.uname
    }
}

export default connect(mapToProps, null)(Main);
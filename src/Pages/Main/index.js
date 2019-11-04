import React, { useState } from 'react';
import {connect} from 'react-redux';
import { TableFrame, TableBody, TotalDisplay } from '../../Components/Table';
import Inputs from '../../Components/Inputs';

const Main = (props) => {
    const [companyData, setCompanyData] = useState({});
    const [username, setUsername] = useState('');
    const [status, setStatus] = useState('');

    React.useEffect(() => {
        fetch('/tempData/companyData.json')
        .then(response=>response.json())
        .then(data=>{
            setCompanyData(data);
        })
        .catch(e=>{
            console.log(e);
        });
    }, [])

    return (
        <>
            <div className="row">
                <div className="row">
                    <div className="col m12">Welcome: {username}</div>
                </div>
                <div className="row">
                    <div className="col m2">CASHBOOK</div>
                    <div className="col m4">{companyData.companyName}</div>
                </div>
                <div className="row">
                    <TableFrame>
                        {
                            props.cashbook.map((cashbook,index)=>{
                                return <TableBody key={index} {...cashbook} />
                            })
                        }
                        <Inputs />
                        <TotalDisplay {...props.totals} />
                    </TableFrame>
                </div>
            </div>
        </>
    )
}

const mapToProps = state => {
    return {
        cashbook:state.cashbook,
        totals:state.totals
    }
}

export default connect(mapToProps,null) (Main);
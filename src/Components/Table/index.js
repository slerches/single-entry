import React from 'react';

const TableFrame = (props) => {
    return (
        <div  className="row" style={{width:'100%'}}>
            <table className='bd'>
                <thead>
                    <tr style={{ fontSize: '12px' }}>
                        <th className='bd' colSpan='3'>Details</th>
                        <th className='bd' colSpan='3'>Money In</th>
                        <th className='bd' colSpan='6'>Money Out</th>
                        <th className='bd'>&nbsp;</th>
                        <th className='bd' rowSpan='2'>R</th>
                    </tr>
                    <tr style={{fontSize:'10px'}}>
                        <th className='bd'>Date</th>
                        <th className='bd'>Description</th>
                        <th className='bd'>Ref </th>
                        <th className='bd' style={{width:'45px'}}>Sales</th>
                        <th className='bd' style={{ width: '45px' }}>Bank Interest</th>
                        <th className='bd' style={{ width: '45px' }}>Total In</th>
                        <th className='bd' style={{ width: '60px' }}>Stationary</th>
                        <th className='bd' style={{ width: '75px' }}>Office Equip</th>
                        <th className='bd' style={{ width: '45px' }}>Internet</th>
                        <th className='bd' style={{ width: '45px' }}>Drawings</th>
                        <th className='bd' style={{ width: '65px' }}>Bank Fees</th>
                        <th className='bd' style={{ width: '65px' }}>Total Out</th>
                        <th className='bd' style={{ width: '85px' }}>Bank Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
            
        
            <div className="row" >
                
            </div>
        </div>
        
    )
}


const TableBody = (props) => {
    return(
        <tr style={{ fontSize: '10px' }}>
            <td className='bd'>{props.date}</td>
            <td className='bd'>{props.description}</td>
            <td className='bd'>{props.tr_ref}</td>
            <td className='bd'>{props.sales}</td>
            <td className='bd'>{props.bank_interest}</td>
            <td className='bd'>{props.total_in}</td>
            <td className='bd'>{props.stationary}</td>
            <td className='bd'>{props.office_equipement}</td>
            <td className='bd'>{props.internet}</td>
            <td className='bd'>{props.drawings}</td>
            <td className='bd'>{props.bank_fees}</td>
            <td className='bd'>{props.total_out}</td>
            <td className='bd'>{props.bank_balance}</td>
            <td className='bd'>R</td>
        </tr>
    )
}


const TotalDisplay = (props) => {
    return(
        <tr style={{ fontSize: '13px',fontWeight:"bold" }}>
            <td className='bd right-align' colSpan='2'>Totals</td>
            <td className='bd'>&nbsp;</td>
            <td className='bd'>{props.sales}</td>
            <td className='bd'>{props.bank_interest}</td>
            <td className='bd'>{props.total_in}</td>
            <td className='bd'>{props.stationary}</td>
            <td className='bd'>{props.office_equipement}</td>
            <td className='bd'>{props.internet}</td>
            <td className='bd'>{props.drawings}</td>
            <td className='bd'>{props.bank_fees}</td>
            <td className='bd'>{props.total_out}</td>
            <td className='bd'>{props.bank_balance}</td>
            <td className='bd'>C/F</td>
        </tr>
    )
}

export {TableFrame,TableBody,TotalDisplay}
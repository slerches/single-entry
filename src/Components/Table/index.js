import React from 'react';
import accounting from 'accounting';


const TableFrame = (props) => {
    return (
        <div className="row" style={{ width: '100%' }}>
            <table className='bd'>
                <thead>
                    <tr style={{ fontSize: '12px' }}>
                        <th className='bd bd-r' colSpan='3'>Details</th>
                        <th className='bd bd-r' colSpan='3'>Money In</th>
                        <th className='bd bd-r' colSpan='6'>Money Out</th>
                        <th className='bd bd-r'>&nbsp;</th>
                        <th className='bd' rowSpan='2'>R</th>
                    </tr>
                    <tr style={{ fontSize: '10px' }}>
                        <th className='bd'>Date</th>
                        <th className='bd'>Description</th>
                        <th className='bd bd-r'>Ref </th>
                        <th className='bd' style={{ width: '45px' }}>Sales</th>
                        <th className='bd bd-r' style={{ width: '45px' }}>Bank Interest</th>
                        <th className='bd bd-r' style={{ width: '45px' }}>Total In</th>
                        <th className='bd' style={{ width: '70px' }}>Stationary</th>
                        <th className='bd' style={{ width: '80px' }}>Office Equip</th>
                        <th className='bd' style={{ width: '55px' }}>Internet</th>
                        <th className='bd' style={{ width: '50px' }}>Drawings</th>
                        <th className='bd bd-r' style={{ width: '40px' }}>Bank Fees</th>
                        <th className='bd bd-r' style={{ width: '60px' }}>Total Out</th>
                        <th className='bd bd-r' style={{ width: '80px' }}>Bank Balance</th>
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
    return (
        <tr style={{ fontSize: '10px' }}>
            <td className='bd'>{props.date}</td>
            <td className='bd'>{props.description}</td>
            <td className='bd bd-r'>{props.tr_ref}</td>
            <td className='bd'>{accounting.formatMoney(props.sales, '₵')}</td>
            <td className='bd bd-r'>{accounting.formatMoney(props.bank_interest, '₵')}</td>
            <td className='bd bd-r'>{accounting.formatMoney(props.total_in, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.stationary, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.office_equipment, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.internet, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.drawings, '₵')}</td>
            <td className='bd bd-r'>{accounting.formatMoney(props.bank_fees, '₵')}</td>
            <td className='bd bd-r'>{accounting.formatMoney(props.total_out, '₵')}</td>
            <td className='bd bd-r'>{accounting.formatMoney(props.bank_balance, '₵')}</td>
            <td className='bd'>R</td>
        </tr>
    )
}


const TotalDisplay = (props) => {
    return (
        <tr style={{ fontSize: '13px', fontWeight: "bold" }}>
            <td className='bd right-align' colSpan='2'>Totals</td>
            <td className='bd'>&nbsp;</td>
            <td className='bd'>{accounting.formatMoney(props.sales, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.bank_interest, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.total_in, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.stationary, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.office_equipment, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.internet, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.drawings, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.bank_fees, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.total_out, '₵')}</td>
            <td className='bd'>{accounting.formatMoney(props.bank_balance,'₵')}</td>
            <td className='bd'>C/F</td>
        </tr>
    )
}

export { TableFrame, TableBody, TotalDisplay }
import React from 'react';
import {connect} from 'react-redux';

class PaymentDetail extends React.Component {
    render() {
        if (!this.props.payment) {
            return <div></div>
        }

        const {id, type, accountNumber, billingName} = this.props.payment;

        return (

            <div>
                <h2>{id}</h2>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>{billingName}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{type}</td>
                    </tr>
                    <tr>
                        <td>Rekeningnr</td>
                        <td>{accountNumber}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        payment: state.activePayment
    };
}

export default connect(mapStateToProps)(PaymentDetail);
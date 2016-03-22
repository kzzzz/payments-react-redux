import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPayment} from '../actions/index';

class PaymentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>{this.renderList()}</ul>
        )
    }

    renderList() {
        return this.props.payments.map((payment)=> {
            return (
                <li key={payment.id}
                    onClick={()=>this.props.selectPayment(payment)}>
                    {payment.id}
                </li>
            );
        });
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of PaymentList
    return {
        payments: state.payments
    }
}

// Anything returned from this function will end up as props
// on the PaymentList container
function mapDispatchToProps(dispatch) {
    // Whenever selectPayment is called, the result should be passed to all the reducers
    return bindActionCreators({selectPayment: selectPayment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentList) ;
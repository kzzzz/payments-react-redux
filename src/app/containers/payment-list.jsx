import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
                <li key={payment.id}>
                    {payment.id}
                </li>
            );
        });
    }
}

function mapStateToProps(state){
    return{
        payments: state.payments
    }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps)(PaymentList) ;
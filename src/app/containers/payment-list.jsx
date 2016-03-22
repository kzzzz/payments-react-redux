import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPayment, fetchPayments} from '../actions/index';

class PaymentList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('component will mount');
        this.props.fetchPayments()
            .then((data)=>console.log(data));
    }

    componentDidMount() {
        console.log('component did mount');
    }

    render() {
        return (
            <ul>{this.renderList()}</ul>
        )
    }

    renderList() {

        if (!this.props.payments) {
            return <li>Loading</li>
        }

        console.log('payments', this.props.payments);

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
    return bindActionCreators({
        fetchPayments: fetchPayments,
        selectPayment: selectPayment
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentList) ;
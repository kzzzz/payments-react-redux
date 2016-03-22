import React from 'react';

import PaymentList from '../containers/payment-list.jsx';
import PaymentDetail from '../containers/payment-detail.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Payments</h1>
                <PaymentList />
                <PaymentDetail />
            </div>
        );
    }
}
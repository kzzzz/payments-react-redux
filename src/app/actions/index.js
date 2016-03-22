import axios from 'axios';

export const ActionTypes = {
    SELECT_PAYMENT: 'SELECT_PAYMENT',
    FETCH_PAYMENTS: 'FETCH_PAYMENTS'
};

export function selectPayment(payment){
     console.log('selected payment', payment);

    return {
        type: ActionTypes.SELECT_PAYMENT,
        payload: payment
    }
}

export function fetchPayments(){
    var request = axios.get('./data/payments.json');

    console.log('request', request);

    return {
        type: ActionTypes.FETCH_PAYMENTS,
        payload: request
    }
}

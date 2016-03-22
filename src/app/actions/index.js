
export const ActionTypes = {
    SELECT_PAYMENT: 'SELECT_PAYMENT'
};

export function selectPayment(payment){
     console.log('selected payment', payment);

    return {
        type: ActionTypes.SELECT_PAYMENT,
        payload: payment
    }
}

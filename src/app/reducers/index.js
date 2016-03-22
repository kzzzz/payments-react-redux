import {combineReducers} from 'redux';
import PaymentsReducer from './payments';
import ActivePaymentReducer from './active-payment';

const rootReducer = combineReducers({
    payments: PaymentsReducer,
    activePayment: ActivePaymentReducer
});

export default rootReducer;


import {combineReducers} from 'redux';
import PaymentsReducer from './books';

const rootReducer = combineReducers({
    'payments': PaymentsReducer
});

export default rootReducer;


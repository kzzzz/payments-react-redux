import {combineReducers} from 'redux';
import {ActionTypes} from '../actions/index';


export default function (state = [], action) {
    console.log('Action received', action);

    switch (action.type) {
        case ActionTypes.FETCH_PAYMENTS:
            // create a new array with old state data, plus the new one
            return action.payload.data;
        //return state.concat([action.payload.data]);
        default:
            return state
    }
}


//export default ()=> {
//    return [
//        {
//            "type": "INCASSO",
//            "accountNumber": "***123",
//            "id": "WW6O7TZ5",
//            "billingName": "W. M. de Niemand",
//            "state": "6"
//        },
//        {
//            "type": "Online betalen",
//            "accountNumber": "***122",
//            "id": "WWH228VB",
//            "billingName": "V. N. van der Zomeren",
//            "orderId": "2",
//            "state": "6"
//        },
//        {
//            "type": "INCASSO",
//            "accountNumber": "***126",
//            "id": "WWXUJDW9",
//            "billingName": "S. S. van Dijk",
//            "orderId": "3",
//            "state": "6"
//        },
//        {
//            "type": "Online betalen",
//            "accountNumber": "***125",
//            "id": "WWM6VKFQ",
//            "billingName": "W. M. van Veen"
//        }
//    ]
//}
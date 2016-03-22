// State argument is not application state, only the state

import {ActionTypes} from '../actions/index';

export default (state = null, action)=>{

    console.log('action type', action.type);

    switch (action.type){
        case ActionTypes.SELECT_PAYMENT:
            return action.payload;
        default:
            return state;
    }
}
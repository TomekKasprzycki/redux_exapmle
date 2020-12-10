import { combineReducers } from 'redux';
import { LOGIN_USER, LOGOUT_USER } from './loginActions';

const inittialUserState = {
    name: '',
    email: '',
    role: ''
}


const activeUser = (state = inittialUserState, action) => {

    switch (action.type) {
        case LOGIN_USER:
            
            state = {
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role
            }

            return state;

        case LOGOUT_USER:

            state = inittialUserState;

            return state;
    
        default:
            return state;
    }
}

export default combineReducers({ activeUser })

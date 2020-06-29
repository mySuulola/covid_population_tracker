import { UPDATE_USER_DETAIL } from '../constants'
import { IUser } from '../../model/user';

const initialState: {
    userData: IUser,
} = {
    userData: {
        email: '',
        password: ''
    },
}


const authReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case UPDATE_USER_DETAIL:
            return {
                ...state,
                userDate: action.payload
            };
        default:
            return state;
    }
}

export default authReducer;
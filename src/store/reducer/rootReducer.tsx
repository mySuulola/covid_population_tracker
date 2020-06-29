import { UPDATE_USER_DETAIL, REGISTER_EVENT } from '../constants'
import { IUser } from '../../model/user';

const initialState: {
    userData: IUser,
    score: number,
    events: Array<any>
} = {
    userData: {
        email: '',
        password: ''
    },
    score: 0,
    events: [
        { eventName: 'Night of Worship', organizationName: 'Worship Church', posterName: 'Seyi Peters', location: 'Ajah, Lagos', currentPopulationCount: 12, spaceLeft: 8 },
        { eventName: 'Legend of the Seeker', organizationName: 'FilmHouse', posterName: 'FilmHouse', location: 'Ikeja, Lagos', currentPopulationCount: 10, spaceLeft: 20 },
        { eventName: 'Liverpool vs Man City', organizationName: 'Heritage Bar', posterName: 'Makinde Jackson', location: 'Surelere, Lagos', currentPopulationCount: 1, spaceLeft: 28 },
    ]
}


const storeReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case UPDATE_USER_DETAIL:
            return {
                ...state,
                userDate: action.payload
            };
        case REGISTER_EVENT:
            console.log(action.payload, 'afsd')
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        default:
            return state;
    }
}

export default storeReducer;


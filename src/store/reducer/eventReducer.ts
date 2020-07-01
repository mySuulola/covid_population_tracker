import { REGISTER_EVENT } from '../constants'

const initialState: {
    events: Array<Object>
} = {
    events: [
        { eventName: 'Night of Worship', organizationName: 'Worship Church', posterName: 'Seyi Peters', location: 'Ajah, Lagos', currentPopulationCount: 12, spaceLeft: 8 },
        { eventName: 'Legend of the Seeker', organizationName: 'FilmHouse', posterName: 'FilmHouse', location: 'Ikeja, Lagos', currentPopulationCount: 10, spaceLeft: 20 },
        { eventName: 'Liverpool vs Man City', organizationName: 'Heritage Bar', posterName: 'Makinde Jackson', location: 'Surelere, Lagos', currentPopulationCount: 1, spaceLeft: 28 },
    ]
}


const eventReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case REGISTER_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        default:
            return state;
    }
}

export default eventReducer;


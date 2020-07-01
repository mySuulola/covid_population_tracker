import { UPDATE_SCREEN_MODE } from '../constants'

const initialState: {
    darkMode: boolean,
} = {
   darkMode: true
}


const styleReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case UPDATE_SCREEN_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
}

export default styleReducer;
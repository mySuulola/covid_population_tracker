import { ADD_TASK } from './constant'

const initialState = {
  allTasks:  [
    { id: 1, item: "Watch football" },
    { id: 2, item: "Eat food" },
    { id: 3, item: "Sleep" },
    { id: 4, item: "Fix internet issue" },
]}


const todoStore = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                allTasks: [...state.allTasks, action.payload]
            }
        default:
            return state;
    }
}


export default todoStore
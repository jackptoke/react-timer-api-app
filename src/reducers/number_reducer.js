// import { initialState } from './constants';
const initialState = { counter: 0 };

const numberReducer = (state=initialState, action) => {
    let newState = {};
    switch(action.type){
        case "INCREMENT":
            newState = { ...state, counter: action.newCount };
            break;
        default:
            newState = { ...state};
            break;
    }
    return newState;
}

export default numberReducer;
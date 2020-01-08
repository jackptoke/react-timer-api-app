// import { initialState } from './constants';
const initialState = { trivia: "Enjoy some interesting facts about numbers.", delay: 1000 }

const triviaReducer = (state=initialState, action) => {
    let newState = {};
    switch(action.type){
        case "NEW_TRIVIA":
            newState = { ...state, trivia: action.newTrivia };
            break;
        default:
            newState = { ...state};
            break;
    }
    return newState;
}

export default triviaReducer;
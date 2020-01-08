import {combineReducers} from 'redux';
import numberReducer from './number_reducer';
import triviaReducer from './trivia_reducer';

export default combineReducers({
    numberReducer, triviaReducer
});
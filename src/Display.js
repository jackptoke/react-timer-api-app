import React, {Component} from 'react';
import Number from './Number';
import Trivia from './Trivia';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';

// import initialState from './reducers/constants';

class Display extends Component{
    // const trivia = useSelector(state => state.trivia);
    // reducer(state=initialState, action){
    //     let newState = {};
    //     switch(action.type){
    //         case "INCREMENT":
    //             newState = { ...state, counter: action.newCount };
    //             break;
    //         case "NEW_TRIVIA":
    //             newState = { ...state, trivia: action.newTrivia };
    //             break;
    //         default:
    //             newState = { ...state};
    //             break;
    //     }
    //     return newState;
    // }

    store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    render(){
        return (
            <Provider store={this.store}>
                <div>
                    <Number  />
                    <Trivia />
                </div>
        </Provider>
        );
    }
}

export default Display;
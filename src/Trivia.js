import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import "./Trivia.css";

function mapStateToProps(state){
    return {counter: state.numberReducer.counter, delay: state.triviaReducer.delay, trivia: state.triviaReducer.trivia};
}

class Trivia extends Component{
    //Fetch data from an api and update the state
    fetchTrivia = () => {
        axios(`http://numbersapi.com/${this.props.counter}`)
        .then(result => {
            this.props.dispatch({type: "NEW_TRIVIA", newTrivia: result.data})
        })
        .catch(err => { return err } );
    }

    componentDidMount(){
        const {delay} = this.props;
        setInterval(this.fetchTrivia, 3*delay);
    }

    render(){
        const {trivia} = this.props;
        return (
            <div className="Trivia">{trivia}</div>
        );
    }
}

export default connect(mapStateToProps)(Trivia);
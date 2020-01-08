import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {counter: state.numberReducer.counter, delay: state.triviaReducer.delay}
}

class Number extends Component{

    increment = () => {
        const {counter} = this.props;
        const newCount = counter + 1;
        this.props.dispatch({type: "INCREMENT", newCount: newCount});
    }

    componentDidMount(){
        const {delay} = this.props;
        setInterval(this.increment, delay);
    }

    render(){
       const {counter} = this.props;
        return (
            <h1>{counter}</h1>
        );
    }
}

export default connect(mapStateToProps)(Number);
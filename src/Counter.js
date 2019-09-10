import React from 'react';
import {connect} from 'react-redux';
import{increment, decrement} from './actions/actions'


class Counter extends React.Component {
    increment = () => {
        this.props.increment()
    }
    decrement = () => {
        this.props.decrement()
    }
    reset = () => {
        this.props.dispatch({type: 'RESET'})
    }
    render(){
        return(
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                    <br />
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({count: state.count});
const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
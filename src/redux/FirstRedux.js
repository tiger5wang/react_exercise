import React, {Component} from 'react';
import store from '../store/index'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        count: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({type: 'add'}),
        minus: () => dispatch({type: 'minus'}),
        asyncAdd: () => dispatch => {
            console.log(dispatch)
            setTimeout(() => {
                dispatch({type: 'add'})
            }, 1000)
        }
    }
};


@connect(mapStateToProps, mapDispatchToProps)
class FirstRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>当前值为： {this.props.count}</p>
                <button onClick={() => this.props.minus()}>-</button>
                <button onClick={() => this.props.add()}>+</button>
                <button onClick={() => this.props.asyncAdd()}>延迟</button>
            </div>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(FirstRedux)
export default FirstRedux

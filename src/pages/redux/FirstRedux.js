import React, {Component} from 'react';
import store from '../../store/index'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from './count.redux'
import {Link} from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

const mapDispatchToProps =  {add, minus, asyncAdd};


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
                <p>课程列表</p>
                <ul>
                    <li>
                        <Link to='/detail/web'>web架构师</Link>
                    </li>
                    <li>
                        <Link to='/detail/python'>python架构师</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(FirstRedux)
export default FirstRedux

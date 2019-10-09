import React, {Component} from 'react';
import {login } from './user.redux';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter } from 'react-router-dom'
import ProfileCenter from "./ProfileCenter";


const mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin,
        loading: state.user.loading,
        error: state.user.error,
    }
};

const mapDispatchToProps = {login};


@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pwd: ''
        };
        console.log('login_props', props)
    }

    render() {
        const {uname, pwd} = this.state;
        const redirect = this.props.location.state && this.props.location.state.redirect || '/';
        if(this.props.isLogin) {
            console.log('redirect', redirect)
            return <Redirect to={redirect}/>
        }
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <label htmlFor="账号">账号<input type="text" onChange={e => this.setState({uname: e.target.value})}/></label>
                    </div>
                    <div>
                        <label htmlFor="密码">密码<input type="text" onChange={e => this.setState({pwd: e.target.value})}/></label>
                    </div>
                    <div style={{color: 'red'}}>{this.props.error}</div>
                    <button onClick={() => this.props.login({uname: uname, pwd: pwd})}>{this.props.loading ? '登录中...': '登录'}</button>
                    <Route path='/about-me' component={ProfileCenter}/>
                </div>
            </BrowserRouter>

        )
    }
}


export default Login

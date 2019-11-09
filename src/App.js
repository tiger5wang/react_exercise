/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React, {Component} from 'react';
import ExerciseHome from './ExerciseHome'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import OrderList from "./pages/redux/OrderList";
import ProfileCenter from "./pages/redux/ProfileCenter";
import Login from "./pages/redux/Login";
import { connect } from 'react-redux'


// 原则： 容器组件负责获取数据，逻辑处理； 展示组件负责根据props 显示信息。
// 函数式组件(展示组件)，如果一个组件只根据 props 来渲染页面，没有内部的 state 状态，则最好的方法就是使用函数组件的形式实现，并且工作中应尽可能还函数形式封装小功能的组件，这样可以高复用组件，避免重复 render， 提高性能 等
function Welcome(props) {
    return (
        <div>{props.name}, 欢迎来到React</div>
    )
}

// 传递进来的是路由器对象
function CourseDetail(props) {
    console.log(props)
    // 路由对象的三个属性：
    // history: 导航指令
    // location: 当前 url 信息
    // match: 传递的参数信息 match.params
    return (
        <div>
            当前课程是：{props.match.params.course}
            <button onClick={props.history.goBack}>后退</button>
        </div>
    )
}

// 404 页面
function NoMatch(props) {
    return (
        <div>404, {props.location.pathname} 路由不存在，请检查</div>
    )
}


// 因为自定义路由防卫组件需要使用登录相关的状态，所以需要使用connect链接，以使用props相关属性值
@connect(state => ({isLogin: state.user.isLogin}))
class PrivateRoute extends Component{
    render() {
        const {component: Com, isLogin, ...rest} = this.props;
        return (
            <Route {...rest}
                   render={props => isLogin ? <Com/> : <Redirect to={{
                       pathname: '/login',
                       state: {redirect: props.location.pathname}
                   }}/>}/>
        )
    }

}

// 容器组件
export default class App extends Component {
    render() {
        return (
            <div style={{padding: 12}}>
                <h1>react 练习</h1>
                <Welcome name={'tom'}/>
                <BrowserRouter>
                    {/*导航链接*/}
                    <ul>
                        <li><Link to='/'>累加器</Link></li>
                        <li><Link to='/about-me'>个人中心</Link></li>
                        <li><Link to='/login'>登录</Link></li>
                    </ul>
                    {/*路由配置， 路由即组件 */}
                    {/*路由匹配规则，包容式匹配，只要匹配上了就会在页面显示*/}
                    {/*使用Switch则只会匹配一个，从上到下先匹配到哪个显示哪个页面*/}
                    <Switch>
                        <Route exact path={'/'} component={ExerciseHome}/>
                        {/*动态路由，使用方法如下，使用 ：形式*/}
                        {/*组件接收时使用 props.match.params.的形式接收*/}
                        <Route path={'/detail/:course'} component={CourseDetail}/>
                        {/*自定义路由防卫组件*/}
                        <PrivateRoute path={'/about-me'} component={ProfileCenter}/>
                        <Route path={'/login'} component={Login}/>
                        {/*404，没有path，必然匹配*/}
                        <Route component={NoMatch}/>
                    </Switch>
                </BrowserRouter>
                {/*<ExerciseHome/>*/}
            </div>
        )
    }
}

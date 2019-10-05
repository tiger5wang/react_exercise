import React, {Component} from 'react';
import ExerciseHome from "../ExerciseHome";
import ProfileCenter from "./ProfileCenter";
import Login from "./Login";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// 传递进来的是路由器对象
function CourseDetail(props) {
    console.log(props)
    // history: 导航指令
    // location: 当前 url 信息
    // match: 传递的参数信息 match.params
    return(
        <div>
            当前课程是：{props.match.params.course}
            <button onClick={props.history.goBack}>后退</button>
        </div>
    )
}

function NoMatch(props) {
    return(
        <div>404, {props.location.pathname} 路由不存在，请检查</div>
    )
}

export default class RouteExample extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    {/*导航链接*/}
                    <ul>
                        <li><Link to='/'>累加器</Link></li>
                        {/*<li><Link to='/order'>订单</Link></li>*/}
                        <li><Link to='/about-me'>个人中心</Link></li>
                        <li><Link to='/login'>登录</Link></li>
                    </ul>
                    {/*路由配置， 路由即组件 */}
                    {/*路由匹配规则，包容式匹配，只要匹配上了就会在页面显示*/}
                    <Switch>
                        <Route exact path={'/'} component={ExerciseHome}/>
                        {/*<Route path={'/order'} component={OrderList}/>*/}
                        <Route path={'/detail/:course'} component={CourseDetail}/>
                        <Route path={'/about-me'} component={ProfileCenter}/>
                        <Route path={'/login'} component={Login}/>
                        {/*404，没有path，必然匹配*/}
                        <Route component={NoMatch}/>
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }


}


import React, {Component} from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import OrderList from "./OrderList";


function UserInfo(props) {
    return(
        <div>
            这里是个人信息页面
        </div>
    )
}

export default class ProfileCenter extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        console.log(props)
    }

    render() {
        return (
            <div>
                <h5>个人中心</h5>
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to='/user/userinfo'>个人信息</Link>
                        </li>
                        <li>
                            <Link to='/user/order'>我的订单</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/user/userinfo' component={UserInfo}/>
                        <Route path='/user/order' component={OrderList}/>
                        <Redirect to='/about-me'/>
                    </Switch>

                </BrowserRouter>

            </div>
        )
    }


}


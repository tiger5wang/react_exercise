import React, {Component} from 'react';
// import MyFormDecorator from './MyFormDecorator'
import Form from './MyFormDecorator2'
import MyInput from './MyInput'

import { Icon } from 'antd'

const Item = Form.Item;

// @MyFormDecorator
@Form.create()
class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    login =  () => {
        console.log('调用api')
    }

    onSubmit = () => {
        this.props.validate((error, data) => {
            if(error) {
                console.log('验证失败')
            } else {
                console.log(data)
                this.login()
            }
        })
    }

    render() {
        const {getFieldDecorator} = this.props;
        return (
            <div>
                <Item>
                    {getFieldDecorator('uname', {
                        rules: [{required: true, message: '请输入用户名'}]
                    })(<MyInput type="text" prefix={<Icon type={'user'} style={{color: 'rgba(0,0,0,.25)'}}/>}/>)}
                </Item>


                {getFieldDecorator('password', {
                    rules: [{required: true, message: '请输入密码'}]
                })(<MyInput type="password" prefix={<Icon type={'lock'} style={{color: 'rgba(0,0,0,.25)'}}/>}/>)}

                <button onClick={this.onSubmit}>登录</button>
            </div>
        )
    }
}

export default MyForm


import React, {Component} from 'react';
import MyFormDecorator from './MyFormDecorator'


@MyFormDecorator
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
                {getFieldDecorator('uname', {
                    rules: [{required: true, message: '请输入用户名'}]
                })(<input type="text"/>)}

                {getFieldDecorator('password', {
                    rules: [{required: true, message: '请输入密码'}]
                })(<input type="password"/>)}

                <button onClick={this.onSubmit}>登录</button>
            </div>
        )
    }
}

export default MyForm


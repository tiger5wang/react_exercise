import React, {Component} from 'react';

let MyForm = Object.create(null);

function FormItem(props) {
    return(
        <div>
            {props.children}
        </div>
    )
}

function FormCreate(FormCom) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {}
        }

        validateField = (field) => {
            const rules = this.options[field].rules;
            let message;
            rules.some(rule => {
                if(rule.required) {  // 验证required 这个字段的规则
                    if(!this.state[field]) {  // 如果值为空，需要展示提示内容，把提示内容赋值给state,值不为空则提示内容为空
                        this.setState({
                            [field + 'message']: rule.message
                        });
                        message = true;
                        return true
                    } else {
                        this.setState({
                            [field + 'message']: ''
                        });
                        message = false;
                        return false
                    }
                }
                //下面继续验证其他字段
            });
            return message  // 返回每次验证的结果的目的是最后提交时 validate 方法验证是否所有表单都付合要求
        };

        handleChange = (e) => {
            const {name, value} = e.target;
            this.setState({
                [name]: value,
            }, () => this.validateField(name));
        };

        getFieldDecorator = (field, option) => {
            this.options[field] = option;
            return (InputCom) => (
                <div>
                    {React.cloneElement(InputCom, {
                        name: field,  // input 空间的name属性
                        value: this.state[field] || '',   // input 控价的value属性
                        onChange: this.handleChange   // input空间change事件处理
                    })}
                    <p style={{color: 'red'}}>{this.state[field + 'message'] || ' '}</p>
                </div>
            )
        };

        validate = (callback) => {
            // 获取所有表单的name数组
            const options = Object.keys(this.options);
            // 对所有的表单遍历判断是否都通过验证
            const res = options.map((field) => {return this.validateField(field)});  // 结果为验证结果的数组
            const error = res.some(v => v === true);
            callback(error, this.state);
        };

        render() {
            return(
                <div>
                    <FormCom
                        {...this.props}
                        getFieldDecorator={this.getFieldDecorator}
                        validate={this.validate}
                    />
                </div>
            )
        }
    }
};

MyForm.create = function (Comp) {
    return FormCreate
};

MyForm.Item = FormItem;


export default  MyForm


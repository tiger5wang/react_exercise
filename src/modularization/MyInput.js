import React, {Component} from 'react';
import './Com.css'


export default class MyInput extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { type, name, value, prefix, onChange } = this.props;
        return (
            <label className='myInput'>
                {prefix}
                <input className='myLabel' type={type} name={name} value={value} onChange={onChange} />
            </label>
        )
    }


}




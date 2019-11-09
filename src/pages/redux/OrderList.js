import React, {Component} from 'react';


export default class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['web全栈', 'python', 'java']
        }
        console.log(this.props)
    }

    render() {
        const {list} = this.state;
        return (
            <div>
                <ul>
                    {list.map((item) =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }


}


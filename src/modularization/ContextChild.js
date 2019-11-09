import React, {Component, useContext} from 'react';
import global  from './Global';

export default class ContextChild2 extends Component {
    static contextType = global.MyContext;
    constructor(props) {
        super(props);
        console.log(global.MyContext)
    }
    render() {
        // console.log('contextType', contextType)
        console.log('this.context', this.context)
        return (
            <div>
                {this.context.name}:
                <ul>
                    <li>{this.context.intro}</li>
                </ul>
            </div>
        )
    }
}

// export default function ContextChild3()  {
//
//     const ctx = useContext(global.MyContext)
//     return (
//         <div>
//             {ctx.name}:
//             <ul>
//                 <li>{ctx.intro}</li>
//             </ul>
//         </div>
//     )
// }


import React, { Component } from 'react';
// import Button from 'antd/lib/button'
// import 'antd/dist/antd.css'
import { Button } from 'antd'
// import PureComponent from "./modularization/PureComponent";
import Hoc from "./modularization/Hoc";

export default class ExerciseHome extends Component {

    render() {
        return (
            <div>
                <Button type={'primary'}>按钮</Button>

                {/*子组件 render 性能优化*/}
                {/*<PureComponent/>*/}

                {/*高阶组件*/}
                <Hoc/>

            </div>
        )
    }


}
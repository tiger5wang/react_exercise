import React, { Component } from 'react';
// import Button from 'antd/lib/button'
// import 'antd/dist/antd.css'
import { Button } from 'antd'
// import PureComponent from "./modularization/PureComponent";
import Hoc from "./modularization/Hoc";
import Compositions from "./modularization/Compositions";
import HookText from "./modularization/HookText";
import Context from "./modularization/Context";

export default class ExerciseHome extends Component {

    render() {
        return (
            <div>
                {/*<Button type={'primary'}>按钮</Button>*/}

                {/*子组件 render 性能优化*/}
                {/*<PureComponent/>*/}

                {/*高阶组件*/}
                {/*<Hoc/>*/}

                {/*复合组件*/}
                {/*<Compositions/>*/}

                {/*Hook api使用*/}
                {/*<HookText/>*/}

                {/*组件跨层级通信 context*/}
                <Context/>
            </div>
        )
    }


}
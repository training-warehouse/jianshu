import React, {Component} from "react";
import {GlobalStyled} from "./style";
import {IconfontStyled} from "./statics/iconfont/iconfont"

import Header from "./common/header";

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyled/>
                <IconfontStyled/>
                <Header></Header>
            </div>
        )
    }
}

export default App;

import React, {Component, Fragment} from "react";
import {Provider} from "react-redux";

import {GlobalStyled} from "./style";
import {IconfontStyled} from "./statics/iconfont/iconfont"

import Header from "./common/header";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyled/>
                <IconfontStyled/>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </Fragment>
        )
    }
}

export default App;

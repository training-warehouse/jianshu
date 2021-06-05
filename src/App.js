import React, {Component, Fragment} from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';

import {GlobalStyled} from "./style";
import {IconfontStyled} from "./statics/iconfont/iconfont"

import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from './pages/write';

import store from "./store";


class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyled/>
                <IconfontStyled/>
                <Provider store={store}>
                    <BrowserRouter>
                        <Header/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail/:id' exact component={Detail}/>
                        <Route path='/login/' exact component={Login}/>
                        <Route path='/write/' exact component={Write}/>
                    </BrowserRouter>
                </Provider>
            </Fragment>
        )
    }
}

export default App;

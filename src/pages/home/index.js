import React, {Component} from "react";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from "./style";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                         src="https://iknow-pic.cdn.bcebos.com/43a7d933c895d14331c09e4c73f082025aaf072e"
                         alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home

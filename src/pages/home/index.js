import React, {PureComponent} from "react";
import {connect} from "react-redux";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {actionCreators} from './store';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from "./style";

class Home extends PureComponent {
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
                {this.props.showScroll ?
                    <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

            </HomeWrapper>
        )
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        // 销毁事件
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }


    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}


const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)

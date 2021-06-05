import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {ListItem, ListInfo, LoadMore} from '../style'
import {actionCreators} from '../store'

// 使用PureComponent需要使用immutable来管理对象
class List extends PureComponent {
    render() {
        const {list, getMoreList, page} = this.props
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link to={"/detail/" + item.get('id')} key={index}>
                                <ListItem key={item.get('id')}>
                                    <img className='pic'
                                         src={item.get('imgUrl')}
                                         alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List)

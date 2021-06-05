import React, {Component} from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    SearchWrapper,
} from './style'


class Header extends Component {
    render() {
        const {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? <NavItem className='right'
                                         onClick={logout}>退出</NavItem> :
                            <Link to='/login'>
                                <NavItem className='right'>登录</NavItem>
                            </Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'
                           style={{fontSize: '20px'}}>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe631;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writting'>
                                <i className='iconfont'>&#xe6eb;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
        const newList = list.toJS()
        const pageList = []
        if (newList.length) {
            for (let i = (page - 1) * 1; i < page * 1; i++) {
                pageList.push(
                    <SearchInfoItem
                        key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }


        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={icon => {
                                this.spinIcon = icon
                            }} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (!list.length) {
                dispatch(actionCreators.getList())
            }

            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`

            if (page < totalPage) {
                dispatch(actionCreators.changePageList(page + 1))
            } else {
                dispatch(actionCreators.changePageList(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React, {Component} from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont' style={{fontSize:'20px'}}>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch/>
                        <i className='iconfont'>&#xe631;</i>
                    </SearchWrapper>
                    <Addition>
                        <Button className='writting'>
                            <i className='iconfont'>&#xe6eb;</i>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }

}

export default Header

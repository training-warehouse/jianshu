import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的值
            return state.set('focused', true)
        case constants.SEARCH_BLUR:
            return state.set('focused', false)
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}
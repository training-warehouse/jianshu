import axios from "axios";
import {constants} from '../store'

const changeLogin = (login) => ({
    type: constants.CHANGE_LOGIN,
    login
})

const changeLogout = () => ({
    type: constants.CHANGE_LOGOUT,
    login: false
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
            const result = res.data
            if (result) {
                dispatch(changeLogin(result))
            } else {
                alert('登录失败')
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(changeLogout())
    }
}
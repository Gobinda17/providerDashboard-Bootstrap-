

import Vuex from 'vuex'
import apiClient from '../../utils/apiClient'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : null,
    error : '',
    role: '',
    permissions: []
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },
    set_user(state,user){
      state.user = user
    },
    set_role(state,role){
      state.role = role
    },
    set_permission(state,permission){
      state.permission = permission
    },
    handle_error(state,error){
      state.error = error
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    login({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          apiClient({url: 'login', data: user, method: 'POST' })
          .then(resp => {
            const token = 'Bearer '+resp.data.access_token
            const user = resp.data.user
            const role = resp.data.role
            const permissions = resp.data.permissions
            localStorage.setItem('token', token)
            apiClient.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            commit('set_user',user)
            commit('set_role',role)
            commit('set_permission',permissions)
            commit('handle_error', '')
            resolve(resp)
          })
          .catch(err => {
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    Register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        apiClient({url: 'register', data: user, method: 'POST' })
        .then(resp => {
          const token = 'Bearer '+resp.data.access_token
          const user = resp.data.user
          localStorage.setItem('token', token)
          apiClient.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          commit('handle_error', '')
          resolve(resp)
        })
        .catch(error => {
          localStorage.removeItem('token')
          reject(error)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete apiClient.defaults.headers.common['Authorization']
        resolve()
      })
    },

    getUser({commit}){
      return new Promise((resolve, reject) => {
        apiClient({url:'user',method:'GET'}).then(res =>{
          commit('set_user',res.data.user)
          commit('set_role',res.data.role)
          commit('set_permission',res.data.permissions)
          resolve(res)
        }).catch((err) => {
          reject(err);
        })
      });
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state=> state.user,
    getError: state=> state.error,
    getRole: state=> state.role,
    getPermissions: state=> state.permissions
  }
})
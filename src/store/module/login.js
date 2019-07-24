const login={
    namespace:false,
state:{
    username: '',
    token: ''
},

getters:{
    getUserName: state => { return state.username },
    getUserToken: state => { return state.token },
},

actions:{
    
},

mutations:{
    setUserName(state, data) {
        localStorage.setItem('username', data)
        state.username = data
    },
    setUserToken(state, data) {
        localStorage.setItem('token', data)
        state.token = data
    }
}
}


export default login
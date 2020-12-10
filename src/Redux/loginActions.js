const LOGIN_USER = '[loginActions] login user'
const LOGOUT_USER = '[loginActions] logout'

const login = (payload) => ({
    type: LOGIN_USER,
    payload
})

const logout = () => ({
    type: LOGOUT_USER
})

const getUsers = async (email) => {
    const url = "http://localhost:3001/users?email=" + email;
    console.log(url)

    return fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(result => result.json())
      .then(result => result[0])

}

const loginUser = (email) => (dispatch) => {

    getUsers(email)
        .then(result => dispatch(login(result)))

}

export { LOGIN_USER, LOGOUT_USER, loginUser, logout }
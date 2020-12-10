import Login from '../Components/Login/Login';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/loginActions';

const stan = (state) => ({
    user: state.activeUser
})

const akcje = (dispatch) => ({
    loginUser: (user) => { dispatch(loginUser(user)) }
})

export default connect(stan , akcje)(Login);

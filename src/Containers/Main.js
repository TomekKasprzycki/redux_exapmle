import Main from '../Components/Main/Main';
import { connect } from 'react-redux';

const stan = (state) => ({
    user: state.activeUser
})



export default connect(stan)(Main);

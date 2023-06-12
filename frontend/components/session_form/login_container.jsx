import { connect } from "react-redux";
import { login, receiveSessionErrors } from "../../actions/session_actions";

const mSTP = ({ errors }) => ({
  errors: errors.session
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  receiveSessionErrors: () => dispatch(receiveSessionErrors)
})

const LoginContainer = connect(
  mSTP,
  mDTP
)(login)

export default LoginContainer;
import Session from './session';
import {connect} from 'react-redux';
import {requestUser, receiveLogout} from '../../actions/twitch_actions';

const mapStateToProps =  (state) => ({
  twitch: state.twitch,
  session: state.session
});

const mapDispatchToProps =(dispatch) => ({
  requestUser: (authToken)=> dispatch(requestUser(authToken)),
  receiveLogout: () => dispatch(receiveLogout()),

});


export default connect(mapStateToProps, mapDispatchToProps)(Session);

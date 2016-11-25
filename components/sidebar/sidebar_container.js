import Sidebar from './sidebar';
import {connect} from 'react-redux';
import {requestGame, requestAllGames, requestStream} from '../../actions/twitch_actions';

const mapStateToProps =  (state) => ({
  twitch: state.twitch
});

const mapDispatchToProps =(dispatch) => ({
  requestGame: ()=> dispatch(requestGame()),
  requestAllGames: () => dispatch(requestAllGames()),
  requestStream: ()=> dispatch(requestStream())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

import {connect} from 'react-redux';
import GamesDetails from './game_details';

const mapStateToProps = state => ({
  twitch: state.twitch
});

export default connect(mapStateToProps)(GamesDetails);

import {connect} from 'react-redux';
import GamesIndex from './games_index';

const mapStateToProps = state => ({
  twitch: state.twitch
});

export default connect(mapStateToProps)(GamesIndex);

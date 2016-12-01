import {connect} from 'react-redux';
import GamesIndex from './games_index';

const mapStateToProps = state => ({
  twitch: state.twitch,
  loading: state.loading
});

export default connect(mapStateToProps)(GamesIndex);

import {connect} from 'react-redux';
import FollowedStreamsIndex from './followed_streams_index';

const mapStateToProps = state => ({
  twitch: state.twitch,
  loading: state.loading
});

export default connect(mapStateToProps)(FollowedStreamsIndex);

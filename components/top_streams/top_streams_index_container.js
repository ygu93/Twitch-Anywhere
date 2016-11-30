import {connect} from 'react-redux';
import TopStreamsIndex from './top_streams_index';

const mapStateToProps = state => ({
  twitch: state.twitch,
  loading: state.loading
});

export default connect(mapStateToProps)(TopStreamsIndex);

import {connect} from 'react-redux';
import TopStreamsIndex from './top_streams_index';

const mapStateToProps = state => ({
  twitch: state.twitch
});

export default connect(mapStateToProps)(TopStreamsIndex);

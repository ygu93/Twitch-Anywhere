import React from 'react';
import FollowedStreamsIndexItem from './followed_streams_index_item';

class FollowedStreamsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.twitch._total > 0 && this.props.twitch.streams){
      return(
        <ul className='top-stream-index'>
          {this.props.twitch.streams.map((stream, idx) => <FollowedStreamsIndexItem key={idx} stream={stream}/>)}
        </ul>
      );
    }else{
      return <div>No Channels Live</div>;
    }
  }
}

export default FollowedStreamsIndex;

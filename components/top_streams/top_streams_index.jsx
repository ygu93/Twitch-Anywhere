import React from 'react';
import TopStreamsIndexItem from './top_streams_index_item';

class TopStreamsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.twitch.streams){
      return(
        <ul className='top-stream-index'>
          {this.props.twitch.streams.map((stream, idx) => <TopStreamsIndexItem key={idx} stream={stream}/>)}
        </ul>
      );
    }else{
      return <div></div>;
    }
  }
}

export default TopStreamsIndex;

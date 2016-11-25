import React from 'react';
import GameDetailsItem from './game_details_item';

class GameDetails extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.twitch.streams){
      return(
        <ul className='top-stream-index'>
          {this.props.twitch.streams.map((stream, idx) => <GameDetailsItem key={idx} stream={stream}/>)}
        </ul>
      );
    }else{
      return <div></div>;
    }
  }
}

export default GameDetails;

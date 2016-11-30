import React from 'react';
import GamesIndexItem from './games_index_item';

class GamesIndex extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    if(this.props.twitch.top){
      return(
        <div className='game-index'>
          {this.props.twitch.top.map((game, idx) => <GamesIndexItem key={idx} game={game}/>)}
        </div>
      );
    }else{
      return <div className='no-followed-streams'> <span>Could not load games data from Twitch, please check your internet connection</span></div>;
    }
  }
}

export default GamesIndex;

import React from 'react';
import {Link} from 'react-router';


class GamesIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className='game-index-item clickable'>
        <Link to={`/games/${this.props.game.game.name}`}><img src={this.props.game.game.box.medium}/></Link>
        <li className='game-title'>{this.props.game.game.name}</li>
        <li>{this.props.game.viewers} viewers</li>
        <li>{this.props.game.channels} channels</li>

      </div>
    );
  }
}

export default GamesIndexItem;

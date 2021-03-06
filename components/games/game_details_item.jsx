import React from 'react';

class GameDetailsItem extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
    <div className='clickable stream-index-item' onClick={()=> window.open(this.props.stream.channel.url)}>
      <div className='stream-preview-img'>
        <img src={this.props.stream.preview.small}></img>
      </div>
      <ul className='stream-details'>
        <li className='stream-name'>{this.props.stream.channel.display_name}</li>
        <li>Streaming {this.props.stream.game}</li>
        <li className='stream-status'>{this.props.stream.channel.status}</li>
        <li>Viewers: {this.props.stream.viewers}</li>
      </ul>
    </div>
    );
  }
}

export default GameDetailsItem;

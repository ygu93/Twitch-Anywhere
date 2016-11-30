import React from 'react';
import {Link} from 'react-router';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      tab: 1
    };
  }

  handleClick(tab){
    this.setState({tab:tab});
  }

  render(){
    return(
        <ul className='sidebar-icons'>
          <li className={this.state.tab === 0 ? 'clickable selected' : 'clickable'} onClick={()=> this.handleClick(0)}><Link to='/followed'><img src="../../assets/icons/heart-1.png"/></Link></li>
          <li className={this.state.tab === 1 ? 'clickable selected' : 'clickable'} onClick={()=> this.handleClick(1)}><Link to='/games'><img src="../../assets/icons/game-controller.png"/></Link></li>
          <li className={this.state.tab === 2 ? 'clickable selected' : 'clickable'} onClick={()=> this.handleClick(2)}><Link to='/streams'><img src="../../assets/icons/video-camera.png"/></Link></li>
        </ul>
  );
  }
}

export default Sidebar;

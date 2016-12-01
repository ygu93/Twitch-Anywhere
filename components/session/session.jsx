import React from 'react';
import {login, receiveLogout} from '../../util/twitch_api_util';
import {removeToken} from '../../auth';

class Session extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      menu:false
    };
    this.showMenu = this.showMenu.bind(this);
  }

  menu(){
    return(
      <ul className='hamb-menu'>
        <li className='clickable' onClick={this.props.receiveLogout}><span>Logout</span></li>
      </ul>
    );
  }

  showMenu(){
    this.setState({menu:!this.state.menu});
  }

  render(){
    if(this.props.session.authToken && this.props.session.display_name && this.props.session.display_name !== 'Undefined'){
      return(
        <h2 className='logged-in'>
          <div className='logo-container'>
            <img className='logo' src='../../assets/icons/logo.png'></img>
          </div>
          <div className='user-info'>
            <img className='profile-pic' src={this.props.session.logo ? this.props.session.logo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png'}/>
            <span className='display-name'>{this.props.session.display_name}</span>
            <img className='hamb-icon clickable' onClick={this.showMenu} src='../../assets/icons/hamburger-icon.png'></img>
            {this.state.menu ? this.menu() : <div></div>}

          </div>
        </h2>
      );
    }else{
      return(
        <h2 className='login-header'><img className='logo' src='../../assets/icons/logo.png'></img>
        <div className='connect-container'>
        <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" className="clickable" onClick={login}/>
        </div>
        </h2>
      );
    }
  }
}

export default Session;

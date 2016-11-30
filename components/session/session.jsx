import React from 'react';
import {login, receiveLogout} from '../../util/twitch_api_util';
import {removeToken} from '../../auth';

class Session extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    if(this.props.session.authToken && this.props.session.display_name && this.props.session.display_name !== 'Undefined'){
      return(
        <h2 className='logged-in'><img src={this.props.session.logo ? this.props.session.logo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png'}/>
        <span className='displayName'>{this.props.session.display_name}</span>
        </h2>
      );
    }else{
      return(
        <h2 className='login-header'><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" className="clickable" onClick={login}/></h2>
      );
    }
  }
}

export default Session;

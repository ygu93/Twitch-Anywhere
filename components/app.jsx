import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
const App = ({ children }) => (
  <div>
    <div className='app-container'>
      <h2 className='login-header'><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" className="twitch-connect" onClick={()=>Twitch.login({
        scope: ['user_read', 'channel_read']
      })}/>
      </h2>
      <div className="app-body">
      <SidebarContainer/>
        <div className='app-content'>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default App;

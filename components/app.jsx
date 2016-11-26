import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import {login} from '../util/twitch_api_util';
import {auth} from '../test.js';

const App = ({ children }) => (
  <div>
    <div className='app-container'>
      <h2 className='login-header'><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" className="clickable" onClick={()=>auth()}/>
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

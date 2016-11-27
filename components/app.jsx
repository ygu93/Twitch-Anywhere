import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import SessionContainer from './session/session_container';
import {auth} from '../auth.js';

const App = ({ children }) => (
  <div>
    <div className='app-container'>
    <SessionContainer/>
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

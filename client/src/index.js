/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/12/2025 - 17:36:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2025
    * - Author          : 
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
    
  
);



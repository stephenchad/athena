/** 
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 16/12/2025 - 08:29:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/12/2025
    * - Author          : 
    * - Modification    : 
**/
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import product from './slices/product';

const reducer = combineReducers({
    product,
});

export default configureStore({ reducer }); 
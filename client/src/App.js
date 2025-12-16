

/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/12/2025 - 18:15:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2025
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import ProductScreen from './screens/ProductScreen';


const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ProductScreen />
    </ChakraProvider>
  )
}

export default App

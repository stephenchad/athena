/**
    * @description      : Product screen (normalized path)
    * @author           : 
    * @group            : 
    * @created          : 15/12/2025 - 18:28:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.1
    * - Date            : 15/12/2025
    * - Author          : 
    * - Modification    : Move to screens/ without trailing space
**/

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Center, Wrap, WrapItem, Text, Spinner, Alert, AlertIndicator, Heading } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import fetchProducts from '../redux/actions/productActions';

const ProductScreen = () => {
  const dispatch = useDispatch();

  const { loading, error, products, pagination } = useSelector((state) => {
    console.log('Redux state:', state.product);
    return state.product;
  });

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return (
      <Center minHeight="80vh">
        <Spinner size="xl" color="cyan.500" />
        <Text ml="4">Loading products...</Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error" m={4}>
        <AlertIndicator />
        <Text>Error: {error}</Text>
      </Alert>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Center minHeight="80vh">
        <Heading color="gray.500">No products available</Heading>
      </Center>
    );
  }

  return (
    <Box>
      <Wrap spacing='24px' justify='center' minHeight='80vh' mx={{ base: '6', md: '12', lg: '24' }} maxW='1600px' margin='0 auto'>
        {
          products.map((product) => {
            console.log('Rendering product:', product);
            return (
              <WrapItem key={product._id}>
                <Center>
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            );
          })
        }
      </Wrap>
    </Box>
  );
}

export default ProductScreen

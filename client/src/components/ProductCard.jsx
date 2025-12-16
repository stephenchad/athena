/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 16/12/2025 - 04:05:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/12/2025
    * - Author          : 
    * - Modification    : 
**/
import { Box, Image, Text, Badge, Flex, IconButton, Skeleton, Stack } from '@chakra-ui/react';
import {BiExpand} from 'react-icons/bi';
import React from 'react'

const ProductCard = ({ product, loading }) => {
  console.log('ProductCard received:', product);
  const imageSrc = (product.images && product.images[0]) || product.image || "https://via.placeholder.com/600x400?text=No+Image";
  console.log('Image src:', imageSrc);
  return (
      <Box
        borderWidth='1px'
        overflow='hidden'
        p='4'
        shadow='sm'
        rounded='md'
        w='300px'
        bg='white'
      >
        <Box h='220px' w='100%' overflow='hidden' rounded='md' bg='gray.50'>
          <Image
            src={imageSrc}
            alt={product.name}
            fallback={<Box bg='gray.200' w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>No Image</Box>}
            w='100%'
            h='100%'
            objectFit='cover'
          />
        </Box>

        <Flex mt='3' align='center' gap='2' wrap='wrap'>
          <Badge colorScheme='green'>In Stock</Badge>
          <Badge colorScheme='cyan'>{product.category}</Badge>
        </Flex>

        <Stack spacing='1' mt='3'>
          <Text fontSize='lg' fontWeight='semibold'>
            {product.brand} {product.name}
          </Text>
          <Text fontSize='sm' color='gray.600'>
            {product.subtitle}
          </Text>
        </Stack>

        <Flex justify='space-between' align='center' mt='4'>
          <Text fontSize='xl' fontWeight='bold' color='cyan.600'>
            ${product.price}
          </Text>
          <IconButton aria-label='Expand' icon={<BiExpand size='20'/>} colorScheme='cyan' size='sm' variant='outline'/>
        </Flex>
      </Box>
  )
}

export default ProductCard




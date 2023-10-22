import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {FiSearch} from 'react-icons/fi'

const SearchBtn = ({...rest}) => {
  return (
    <Flex justifyContent={'center'} align={'center'} margin={'20px auto 0'} gap={1}>
      <Input width={'70%'} _placeholder={{
         color: '#ccc'
      }} height={'60px'} placeholder='enter movie name...'  {...rest}/>
      <Button bg={'#205080'} color={'#fff'} height={'60px'}><FiSearch size={25} /> <Text ml={'10px'}>Search</Text></Button>
    </Flex>
  )
}

export default SearchBtn
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const MovieCard = ({movie}) => {
  return (
    <Box className='animated-border' borderBottom={`1px solid ${movie.borderColor}`} mr={'10px'}color={'#fff'} aspectRatio={1/1.5}>
      <Box _hover={{
         filter: 'brightness(0.8)'
      }} pos={'relative'} height={'85%'}>
         <Image roundedTopLeft={10} roundedTopRight={10} objectFit={'cover'} height={'100%'} src={movie?.img} alt='movie img' quality={100} />
         <Box visibility={'hidden'} _hover={{visibility: 'show'}} width={'fit-content'} height={'fit-content'} className='animated-btn' pos={'absolute'} top={0} left={0} right={0} bottom={0} margin={'auto'}>
            <Box className='animated-btn2' bg={'rgba(255, 255, 255, 0.6)'} p={2} rounded={50}><FaRegPlayCircle size={'60px'} color='#fff'/></Box>
         </Box>
      </Box>
      <Flex px={2} align={'center'} justify={'space-between'} mt={2}>
         <Box>
            <Text>{movie?.title}</Text>
            <Text fontSize={'14px'} color={'rgba(255,255,255,0.5)'}>{movie?.year}</Text>
         </Box>

         <Box>
            <Text color={'#ccc'}>{movie?.rating}</Text>
            <MdOutlineFavoriteBorder />
         </Box>
      </Flex>
    </Box>
  )
}

export default MovieCard
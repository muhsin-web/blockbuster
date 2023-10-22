import { HeroImage } from '@/assets'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { SearchInput } from '.'

const HeroBanner = () => {
  return (
    <Box pos={'relative'} bg={'red'} h={'100vh'}>
      <Image style={{
         width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.3)'
      }} src={HeroImage} alt='banner img'/>

      <Flex pos={'absolute'} align={'center'} justify={'center'} top={0} left={0} width={'100%'} height={'100%'}>
         <Box color={'#fff'} textAlign={'center'}>
            <Heading fontWeight={'800'} mb={'10px'} fontSize={'50px'}>Unlimited movies, TV shows, and more</Heading>
            <Text fontWeight={'500'} fontSize={'25px'} mb={'10px'}>Watch anywhere. Cancel anytime.</Text>
            <Text fontWeight={'500'} fontSize={'25px'} mb={'10px'}>Ready to watch? Enter your email to create or restart your membership.</Text>
            <SearchInput />
         </Box>
      </Flex>
    </Box>
  )
}

export default HeroBanner
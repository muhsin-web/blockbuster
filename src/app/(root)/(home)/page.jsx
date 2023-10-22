import { Banner, BlockBuster, MovieSections } from '@/components'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <Box>
      {/* Herobanner section */}
      <Banner />
      <MovieSections header={'Block'} header2={'Buster'}/>
      <MovieSections header2={'Releases'} header={'New'}/>
      <MovieSections header={'Serie'} header2={'Show'}/>
      <MovieSections header={'Movie'} header2={'Trend'}/>
    </Box>
  )
}

export default page
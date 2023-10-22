"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LightLogoIcon } from '@/assets'
import Link from 'next/link'
import { Button, Flex, Drawer, DrawerBody, DrawerFooter, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, DrawerHeader, Input, Text } from '@chakra-ui/react'
import { PageLinks } from '@/data/data'
import { BsGrid } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
const DesktopNav = () => {
   const [navBg, setNavBg] = useState('transparent')
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()

   const addHeaderBg = () => {
      if(window.scrollY > 60) {
         setNavBg('rgba(0,0,0,0.95)')
      }else{
         setNavBg('transparent')
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', addHeaderBg)
   },[])
  return (
    <Flex top={0} left={0} pos={'fixed'} zIndex={100} p={{base: '10px 20px', md: '15px 30px'}} bg={navBg} width={'100%'} justify={'space-between'} align={'center'}>
      <Link href={'/'}>
         <Image height={'50'} src={LightLogoIcon} alt="logo" />
      </Link>

      <Flex display={{md: 'none', lg: 'flex'}} gap={'20px'}>
         {
            PageLinks.map((link, index) => (
               <Link style={{
                  color: '#fff',
                  fontWeight: '400'
               }} href={link.url} key={index}>
                  <Flex _hover={{
                     color: '#205090'
                  }} align={'center'}>
                     {
                        index !== 0 && <BiChevronRight />
                     }
                     <Text>{link.title}</Text>
                  </Flex>
               </Link>
            ))
         }
      </Flex>

      <Button p={0} width={'fit-content'} onClick={onOpen} bg={'transparent'} ref={btnRef} display={{md: 'block', lg: 'none'}}>
         <BsGrid size={'30px'} color='#fff' />
      </Button>

      {/* Mobile view navbar */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'#0339f8'}
        shadow={'xl'}>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default DesktopNav
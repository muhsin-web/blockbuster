"use client"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'

import { Metadata } from 'next'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
    </CacheProvider>
    </html>
  )
}

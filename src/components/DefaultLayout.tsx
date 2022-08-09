import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Head } from './Head'

import Header from './Header'

type DefaultLayoutProps = {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex flexDir="column" flex={1} fontSize="20px">
      <Head />
      <Header />
      <Box overflowY="scroll" m="2%">
        {children}
      </Box>
    </Flex>
  )
}

export default DefaultLayout

import type { AppProps } from 'next/app'
import NextLink from 'next/link'
import {
  Box,
  Center,
  ChakraProvider,
  extendTheme,
  Heading,
  IconButton,
  Link,
  Text,
  Spacer,
} from '@chakra-ui/react'
import { IoMdHome } from 'react-icons/io'

const theme = extendTheme({
  colors: {
    brand: '#1474ab',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box bgColor={'brand'}>
        <Center h="56px">
          <NextLink href={'/'}>
            <Link>
              <IconButton
                aria-label={'Home'}
                as={IoMdHome}
                boxSize={6}
                variant={'link'}
                color={'white'}
              />
            </Link>
          </NextLink>
          <Spacer />
        </Center>
        {/* <NextLink href={'/'}>
          <Link>
            <Heading color="brand" textAlign={'center'}>
              LFStats
            </Heading>
          </Link>
        </NextLink> */}
      </Box>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

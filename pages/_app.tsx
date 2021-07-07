import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Box, Heading, Link, Text } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: '#1474ab',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <NextLink href={'/'}>
          <Link>
            {/* REVIEW: this heading looks horrible, please help. Also the underline doesn't get colored */}
            <Heading color="brand" textAlign={'center'}>
              LFStats
            </Heading>
          </Link>
        </NextLink>
      </div>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

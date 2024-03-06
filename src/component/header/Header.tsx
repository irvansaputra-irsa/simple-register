import { Box, Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} width={'100vw'} backgroundColor={'#D2E6EF'} padding={2} fontWeight={'bold'}>
      <Box fontSize={36}>
        Network Call Practice
      </Box>
      <Box display={'flex'} width={'20%'} justifyContent={'space-around'} alignItems={'center'}>
        <Link fontSize={24} as={ReactRouterLink} to='/'>
          Users
        </Link>
        <Link fontSize={24} as={ReactRouterLink} to='/register'>
          Register
        </Link>
      </Box>
    </Box>
  )
}

import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
//gak tau cara pake tag form dari react router 
import { addUsers } from '../../redux/action'

export const Register = () => {
  const dispatch = useDispatch();
  const nameField = useRef<HTMLInputElement | null>(null);
  const passwordField = useRef<HTMLInputElement | null>(null);
  const emailField = useRef<HTMLInputElement | null>(null);
  
  const submitBtn = (e : any) => {
    e.preventDefault();
    dispatch(addUsers({ name: nameField?.current?.value as string, password: passwordField?.current?.value as string, email: emailField?.current?.value as string}));
  }
  return (
    <Box maxW={'40%'} padding={10} borderRadius={20} bgColor={'#D2E6EF'} m={20}>
      <form onSubmit={(e) => submitBtn(e)}>
        <Heading as='h1' size='xl' mb={5}>Page Register</Heading>
        <FormControl mb={5}>
          <FormLabel>
            Name
          </FormLabel>
          <Input ref={nameField} type='text' name='username' border={'1px solid black'}></Input>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>
            Email
          </FormLabel>
          <Input ref={emailField} type='email' name='email' border={'1px solid black'}></Input>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>
            Password
          </FormLabel>
          <Input ref={passwordField} type='password' name='password' border={'1px solid black'}></Input>
        </FormControl>

        <Box textAlign={'center'}>
          <Button type='submit'>Submit</Button>
        </Box>
      </form>
    </Box>
  )
}

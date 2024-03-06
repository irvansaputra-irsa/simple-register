import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
 //gak tau cara pake tag form dari react router 
import { addUsers } from '../../redux/action'

export const Register = () => {
  const dispatch = useDispatch();

  const submitBtn = (e) => {
    e.preventDefault();
    dispatch(addUsers({ name : nameField.current.value, password: passwordField.current.value, email: emailField.current.value}));
  }

  const nameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);

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

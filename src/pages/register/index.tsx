import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, FormControl, FormLabel, Heading, Input, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
//gak tau cara pake tag form dari react router 
import { addUsers } from '../../redux/action'

type AlertStatus = 'success' | 'info' | 'warning' | 'error' | 'loading';

export const Register = () => {
  const dispatch = useDispatch();
  let nameField = useRef<HTMLInputElement | null>(null);
  let passwordField = useRef<HTMLInputElement | null>(null);
  let emailField = useRef<HTMLInputElement | null>(null);
  const [alertType, setAlertType] = useState('');
  let { isOpen: isVisible, onClose, onOpen } = useDisclosure();

  const submitBtn = (e: any) => {
    e.preventDefault();
    if (nameField?.current?.value !== '' && passwordField?.current?.value !== '' && emailField?.current?.value !== '') {
      dispatch(addUsers({ name: nameField?.current?.value as string, password: passwordField?.current?.value as string, email: emailField?.current?.value as string }));
      nameField.current!.value = "";
      passwordField.current!.value = "";
      emailField.current!.value = "";
      setAlertType('success');
      onOpen();
    } else {
      setAlertType('warning');
      onOpen();
    };
  }
  return (
    <Box maxW={'550px'} padding={10} borderRadius={20} bgColor={'#D2E6EF'} m={20}>
      {isVisible ?
        <Alert status={alertType as AlertStatus} maxW={'100%'} w={'100%'}>
          <AlertIcon />
          <Box>
            <AlertTitle>{alertType === 'success' ? 'Success' : 'Warning'}</AlertTitle>
            <AlertDescription>
              {alertType === 'success' ? 'Data successfully added!' : 'Please check your input!'}
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='absolute'
            right={0}
            top={0}
            onClick={onClose}
          />
        </Alert>
        : ''}
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

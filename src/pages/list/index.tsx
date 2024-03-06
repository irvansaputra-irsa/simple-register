import { Box, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

type listType = {
  name: string,
  email: string,
  password: string
}

export const List = () => {

  const listUsers= useSelector((state: { users: { listOfUser: listType } }) => state.users.listOfUser)
  return (
    <Box>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption placement='top'>List of Users</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>

            {listUsers instanceof Array && listUsers.map((el, idx) => (
              <Tr key={idx}>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
                <Td>{el.password}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

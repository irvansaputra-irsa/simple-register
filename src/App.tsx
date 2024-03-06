import { Route, Routes } from 'react-router-dom'
import { Register } from './pages/register'
import { List } from './pages/list'
import { Header } from './component/header/Header'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box>
      <Header />
      <Routes>
          <Route path='/' element={ <List />} />
          <Route path='/register' element={ <Register />} />
      </Routes>
    </Box>
  )
}

export default App

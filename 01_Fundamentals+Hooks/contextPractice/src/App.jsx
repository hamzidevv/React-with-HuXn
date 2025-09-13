import React from 'react'
import UserProfile from './components/UserProfile'
import { UserProvider } from './UserContext'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  )
}

export default App
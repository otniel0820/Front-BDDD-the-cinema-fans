'use client'


import UserTable from '@/components/UserTable'
import { useUser } from '@/hooks/useUser'
import React from 'react'

export default  function Page(){

  const {users}= useUser()
  
  
  return (
    <div>
      {<UserTable users={users} />}
    </div>
  )
}



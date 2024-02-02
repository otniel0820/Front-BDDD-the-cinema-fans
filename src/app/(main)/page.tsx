'use client'

import Spinner from '@/app/components/Spinner'
import UserTable from '@/app/components/UserTable'
import { useUser } from '@/app/hooks/useUser'
import React from 'react'

export default  function Page(){

  const {users}= useUser()
  
  
  return (
    <div>
      {<UserTable users={users} />}
    </div>
  )
}



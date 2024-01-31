'use client'

import Spinner from '@/app/components/Spinner'
import UserTable from '@/app/components/UserTable'
import { useUser } from '@/app/hooks/useUser'
import React from 'react'

export default  function Page(){

  const {isFetching, users}= useUser()
  
  
  return (
    <div>
      {isFetching?<Spinner/>:<UserTable users={users} />}
    </div>
  )
}



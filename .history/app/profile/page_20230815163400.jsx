'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components'

const Profile = () => {
  return (
    <Profile 
        name='My'
        desc='Welcome to your personalized profile page.'
        data={[]}
        handleEdit={}
        handleDelete={}
    />
  )
}

export default Profile

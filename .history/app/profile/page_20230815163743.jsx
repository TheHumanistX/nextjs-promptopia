'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Profile } from '@components'

const MyProfile = () => {

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile 
        name='My'
        desc='Welcome to your personalized profile page.'
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile

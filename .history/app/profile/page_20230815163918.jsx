'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Profile } from '@components'

const MyProfile = () => {

    const { data: session } = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`)
          const data = await response.json()
          setPosts(data)
        }
    
        fetchPosts();
      }, [])

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

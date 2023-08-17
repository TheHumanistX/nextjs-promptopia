'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Profile } from '@components'

const UserProfile = ({ name, id }) => {
    const router = useRouter();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${id}/posts`)
          const data = await response.json()
          setPosts(data)
        }
    
        if (id) fetchPosts();
      }, [])
    

  return (
    <Profile 
        name= {`${name}'s`}
        desc={`Welcome to ${name}'s profile page.`}
        data={posts}
    />
  )
}

export default UserProfile

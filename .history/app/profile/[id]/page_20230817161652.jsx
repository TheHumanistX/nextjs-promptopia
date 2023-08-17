'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Profile } from '@components'

export const getServerSideProps = async (context) => {
    const { id } = context.query.id
    const { name } = context.query.name
    return {
        props: {
            id,
            name,
        }
    }
}

const UserProfile = (context) => {
    const router = useRouter();
    console.log('UserProfile name: ', name)
    console.log('UserProfile id: ', id)
    const [posts, setPosts] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        const { data } = getServerSideProps(context)
        setName(data.name)
        setId(data.id)
    }, [])

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
        profileType='User'
    />
  )
}

export default UserProfile

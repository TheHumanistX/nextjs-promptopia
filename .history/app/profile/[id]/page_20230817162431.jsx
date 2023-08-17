'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Profile } from '@components'

export const getServerSideProps = (context) => {
    const id = context.searchParams.id
    const name = context.searchParams.name
    return {
        props: {
            id,
            name,
        }
    }
}

const UserProfile = (context) => {
    const router = useRouter();
    const [posts, setPosts] = useState([])
    const [props, setProps] = useState({})
    useEffect(() => {
        const props = getServerSideProps(context)
        console.log('UserProfile props: ', props)
        setProps({
            id: props.props.id,
            name: props.props.name
        })
        // setName(data.name)
        // setId(data.id)
    }, [])
    
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${id}/posts`)
          const data = await response.json()
          setPosts(data)
        }
        
        if (id) fetchPosts();
    }, [])
    
    // console.log('UserProfile name: ', name)
    // console.log('UserProfile id: ', id)

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

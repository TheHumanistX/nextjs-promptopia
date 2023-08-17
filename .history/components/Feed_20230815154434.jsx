'use client'
import { useEffect, useState } from 'react'

import { PromptCard } from './'

const PromptCardList = ({ data, handleTagClick }) => {
  { console.log('Entered PromptCardList....') }
  return (

    <div className="mt-16 prompt_layout">
      {console.log('Entering map of `data`...')}
      {data.map((post) => {
        console.log('Entered map function... calling PromptCard...')
        return <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />

      })}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()

      setPosts(data)
      console.log('data: ', data)

    }
    console.log('posts: ', posts)

    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type='text'
          placeholder='Search for a tag or a username...'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed
Feed
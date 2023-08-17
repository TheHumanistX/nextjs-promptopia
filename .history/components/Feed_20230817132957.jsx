'use client'
import { useEffect, useState } from 'react'

import { PromptCard } from './'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPosts(data)
    }
    
    fetchPosts();
  }, [])
  console.log('posts: ', posts)

  
  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
    
    const promptsSearch = promptSearch()
    
    if (promptsSearch.length > 0) {
      setPosts(promptsSearch)
    } else {
      setPosts([])
    }
    
  }
  
  const promptSearch = () => {
    const filteredPosts = posts.filter((post) => {
      const postText = post.prompt.toLowerCase()
      const searchText = searchText?.toLowerCase()
      return postText.includes(searchText)
    })
    return filteredPosts
  }

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
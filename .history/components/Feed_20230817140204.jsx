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
  const [searchFieldEmpty, setSearchFieldEmpty] = useState(true)
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPosts(data)
    }
    
    fetchPosts();
  }, [searchFieldEmpty])
  console.log('posts: ', posts)

  
  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
    
    const promptsSearch = promptSearch()

    if (promptsSearch.length > 0 && searchText !== '') {
      console.log('if stmt posts: ', posts)
      setSearchFieldEmpty(!searchFieldEmpty)
    }     
    setPosts(promptsSearch)
  }
  
  const promptSearch = () => {
    const filteredPosts = posts.filter((post) => {
      const postText = post.prompt.toLowerCase()
      const searchingText = searchText?.toLowerCase()
      return postText.includes(searchingText)
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
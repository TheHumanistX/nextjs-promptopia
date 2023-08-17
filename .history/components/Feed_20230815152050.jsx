'use client'
import { useEffect, useState } from 'react'

import PromptCard from './'

const PromptCardList = ({ data, handleTagClick }) => {
  <div className="mt-16 prompt_layout">

  </div>
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const respone = await fetch('/api/prompt')
    }
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
        data={[]}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed
Feed
'use client'
import { useEffect, useState } from 'react'

import PromptCard from './'

const Feed = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    
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
    </section>
  )
}

export default Feed
Feed
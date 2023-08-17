'use client'
import { useEffect, useState } from 'react'

import PromptCard from './'

const Feed = () => {
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type='text'
          placeholder='Search for a tag or a username...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </section>
  )
}

export default Feed
Feed
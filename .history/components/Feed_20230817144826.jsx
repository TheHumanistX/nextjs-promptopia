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

  useEffect(() => {
    const promptsSearch = promptSearch()
    const usersSearch = userSearch()
    const tagsSearch = tagSearch()

    console.log('promptsSearch: ', promptsSearch)
    console.log('usersSearch: ', usersSearch)
    console.log('tagsSearch: ', tagsSearch)

    const searchResults = [
      ... (promptsSearch?.length ? promptsSearch : []),
      ... (usersSearch?.length ? usersSearch : []),
      ... (tagsSearch?.length ? tagsSearch : []),
    ]
    console.log('searchResults: ', searchResults)
    const uniqueSearchResults = searchResults.filter((post, index, self) =>
      index === self.findIndex((t) => (
        t._id === post._id
      ))
    )
    if (searchResults.length === 0 && searchText === '') {
      console.log('if stmt posts: ', posts)
      setSearchFieldEmpty(prev => !prev)
      return;
    }
    setPosts(uniqueSearchResults)

  }, [searchText])

  const handleSearchChange = (e) => {
    const newSearchText = e.target.value
    setSearchText(newSearchText)
  }

  const promptSearch = () => {
    const filteredPosts = posts.filter((post) => {
      const postText = post.prompt.toLowerCase()
      const searchingText = searchText?.toLowerCase()
      return postText.includes(searchingText)
    })
    return filteredPosts
  }

  const userSearch = () => {
    if (searchText === '') return
    const filteredPosts = posts.filter((post) => {
      const postCreator = post.creator.username.toLowerCase()
      const searchingText = searchText?.toLowerCase()
      return postCreator.includes(searchingText)
    })
    return filteredPosts
  }

  const tagSearch = () => {
    if (searchText === '') return
    const filteredPosts = posts.filter((post) => {
      const postTag = post.tag.toLowerCase()
      const searchingText = searchText?.toLowerCase()
      return postTag.includes(searchingText)
    })
    return filteredPosts
  }

  const handleTagClick = (tag) => {
    setSearchText(tag.toString());
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
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed
Feed
'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Form } from '@components'

const CreatePrompt = () => {

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] =useState({
        prompt: '',
        tag: '',
    })

    const createPrompt = async (e) => {
      console.log('createPrompt entered...')
      e.preventDefault();
      setSubmitting(true)

      try {
        console.log('entered try/catch block...')
        const response = await fetch('/api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id,
            tag: post.tag,
          })
        })
        console.log('response create: ', response)
        if ( response.ok ) {
          router.push('/')
        }
      } catch (err) {
        console.error('Error creating prompt: ', err)
      } finally {
        setSubmitting(false)
      }
    }

  return (
    <Form 
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt

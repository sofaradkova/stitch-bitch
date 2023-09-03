'use client'

import Post from '@components/Post'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const CreatePost = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
      name: '',
      description: '',
      patternLink: '',
      patternType: '',
    })

    const createPrompt = async(e) => {
      e.preventDefault();
      setSubmitting(true);

      try {
        const response = await fetch('/api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({
            name: post.name,
            description: post.description,
            patternLink: post.patternLink,
            patternType: post.patternType,
            userId: session?.user.id
          })
        })

        if(response.ok) {
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setSubmitting(false)
      }
    }

    return (
        <div className="w-full ml-12">
            <Post
                action="Post"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
        </div>
      )
}

export default CreatePost
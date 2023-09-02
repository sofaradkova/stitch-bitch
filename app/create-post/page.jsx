'use client'

import Post from '@components/Post'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const CreatePost = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
      name: '',
      description: '',
      patternLink: '',
      patternType: '',
    })

    const createPrompt = async(e) => {}

    return (
        <div className="w-full ml-12">
            <Post
                action="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
        </div>
      )
}

export default CreatePost
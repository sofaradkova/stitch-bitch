'use client'

import Post from '@components/Post'
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const CreatePost = () => {
    const router = useRouter();
    const { data: session } = useSession();
    
    const [post, setPost] = useState({ name: "", description: "", patternlink: "", photos: "" })

    const createPost = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/post/new", {
              method: "POST",
              body: JSON.stringify({
                name: post.name,
                description: post.description,
                patternlink: post.patternlink,
                userId: session?.user.id
              }),
            });
      
            if (response.ok) {
              router.push("/");
            }
          } catch (error) {
            console.log(error);
          } 
        };
    return (
        <div className="w-full ml-12">
            <Post
                action="Create"
                post={post}
                setPost={setPost}
                handleSubmit={createPost}
            />
        </div>
      )
}

export default CreatePost
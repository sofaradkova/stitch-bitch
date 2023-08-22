'use client'

import Image from 'next/image';
import { useState } from 'react';

const LikeBtn = () => {
  const [liked, setLiked] = useState(false)
  
    return (
    <div onClick={() => setLiked(prev => !prev)}>
        <Image width={20} height={20} alt="Like button" src={liked ? '/assets/liked.svg' : '/assets/unliked.svg'} />
    </div>
  )
}

export default LikeBtn
'use client';

import { Card, Badge } from 'flowbite-react';
import { HiOutlineUserCircle, HiLightningBolt } from "react-icons/hi";

import Image from 'next/image';
import LikeBtn from './LikeBtn';

const PatternCard = ({ post }) => {
  return (
    <Card className="flex flex-col justify-center px-3" href="/patternpage">
        <div className="w-[300px] h-[300px] overflow-hidden flex items-center justify-center mx-auto">
            <Image width={350} height={350} alt="Pattern example" src="/assets/profile-img.jpg" className="object-contain"/>
        </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {post.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {post.description}
      </p>
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <Badge
            href="/profile"
            size="sm"
            color="gray"
            icon={HiOutlineUserCircle}
            className="px-3"
        >
            <p>
            {post.creator.username}
            </p>
        </Badge>
        <Badge
            href="/guides"
            size="sm"
            color="gray"
            icon={HiLightningBolt}
            className="px-3"
        >
            <p>
            {post.patternType}
            </p>
        </Badge>
        <LikeBtn />
      </div>
    </Card>
  )
}

export default PatternCard
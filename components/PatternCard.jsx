'use client';

import { Card, Badge } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { HiOutlineUserCircle, HiLightningBolt } from "react-icons/hi";

import Image from 'next/image';
import LikeBtn from './LikeBtn';

const PatternCard = () => {
    const pathName = usePathname();
    const { data: session } = useSession();

  return (
    <Card className="flex flex-col justify-center px-3" href="/patternpage">
        <div className="w-[300px] h-[300px] overflow-hidden flex items-center justify-center mx-auto">
            <Image width={350} height={350} alt="Pattern example" src="/assets/profile-img.jpg" className="object-contain"/>
        </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      pattern name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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
            Username
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
            Category
            </p>
        </Badge>
        <LikeBtn />
      </div>
    </Card>
  )
}

export default PatternCard
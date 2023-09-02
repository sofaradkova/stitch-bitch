'use client'

import { Card, Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const GuidesCard = ({ type, description, image }) => {
  const addGuide = () => {
    
  }

  return (
    <Card>
      <div className="h-[350px]"> 
        <Image width={400} height={300} alt="Pattern example" src={image} className="w-full h-full object-cover overflow-hidden" />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Learn to {type}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {description}
      </p>
      <Button color="dark" as={Link} href={`/guides/${type}`} onClick={() => addGuide()} >Start now</Button>
    </Card>
  )
}

export default GuidesCard
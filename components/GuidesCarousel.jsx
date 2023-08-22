'use client'

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const GuidesCarousel = () => {
  return (
<Carousel>
    <img
    alt="..."
    src="/assets/profile-img.jpg"
  />
        <Image
            height={200}
            width={500}
            alt="Knit guide"
            src="/assets/profile-img.jpg"
        />
        <Image
            height={200}
            width={500}
            alt="Knit guide"
            src="/assets/profile-img.jpg"
        />
        <Image
            height={200}
            width={500}
            alt="Knit guide"
            src="/assets/profile-img.jpg"
        />
    </Carousel>
  )
}

export default GuidesCarousel
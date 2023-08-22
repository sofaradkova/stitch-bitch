'use client'

import Link from 'next/link';

import { Button } from 'flowbite-react';

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center">
        <h1 className="head_text text-center">Join Our Community <br className="md:block hidden" /> Of Fiber Artists</h1>
        <p className="text-center sub_text">Learn how to create unique clothes, share your projects, <br className="md:block hidden" />and find inspiration for new ones - all in one place</p>
        <div className="mt-5 flex gap-2 flex-col sm:flex-row">
            <Button pill size="lg"><Link href="/patterns">Get A Free Pattern</Link></Button>
            <Button outline pill size="lg"><Link href="/guides">Start Learning</Link></Button>
        </div>
    </section>
  )
}

export default Home
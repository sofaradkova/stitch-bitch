'use client'

import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [menuDown, setMenuDown] = useState(false);

        if (session) {
            return (
                <div className="navbar bg-base-100 top-0 w-full sticky">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/patterns" className="rounded-full">Patterns</Link></li>
                  <li><Link href="/guides" className="rounded-full">Guides</Link></li>
                </ul>
              </div>
              <Link href="/" className="btn btn-ghost normal-case text-xl">Stitch&Bitch</Link>
            </div>
            <div className="navbar-end">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-4">
                  <li><Link href="/patterns" className="rounded-full">Patterns</Link></li>
                  <li><Link href="/guides" className="rounded-full">Guides</Link></li>
              </ul>
            </div>
            <div className="flex-none gap-2">
<div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <Image
                src={session?.user.image}
                alt="Profile Image"
                width={35}
                height={35}
            />
        </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
            <Link href="/profile" onClick={() => setMenuDown(false)}>
                My Profile
            </Link>
        </li>
        <li>
            <Link href="/create-post">
                Create pattern
            </Link>
        </li>
        <li><button onClick={() => signOut()}>Sign out</button></li>
    </ul>
</div>
</div>
            </div>
          </div>
            )
          }
          return (
            <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/patterns" className="rounded-full">Patterns</Link></li>
                  <li><Link href="/guides" className="rounded-full">Guides</Link></li>
                </ul>
              </div>
              <Link href="/" className="btn btn-ghost normal-case text-xl">Stitch&Bitch</Link>
            </div>
            <div className="navbar-end">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-4">
                  <li><Link href="/patterns" className="rounded-full">Patterns</Link></li>
                  <li><Link href="/guides" className="rounded-full">Guides</Link></li>
              </ul>
            </div>
              <button className="btn rounded-full btn-outline" onClick={() => signIn()}>Sign in</button>
            </div>
          </div>
          )
}

export default Navbar
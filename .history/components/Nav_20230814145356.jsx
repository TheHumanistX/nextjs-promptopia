'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
            src='/assets/images/logo.svg'
            alt='Promptopia Logo'
            width={30}
            height={30}
            className='object-contain'
        />
      </Link>
      <p className="logo_text">Promptopia</p>
    </nav>
  )
}

export default Nav

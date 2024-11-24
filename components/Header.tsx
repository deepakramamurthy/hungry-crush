'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, User, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const query = searchParams.get('query')
    if (query) {
      setSearchQuery(query)
    } else {
      setSearchQuery('')
    }
  }, [searchParams])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?query=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      clearSearch()
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    router.push('/')
  }

  const memoizedHeader = useMemo(() => (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Image
          src="/Main Logo.png"
          alt="Hungry Crush Logo"
          width={400}
          height={133}
          className="w-48 h-auto"
        />
        <div>
          <h1 className="text-2xl font-bold">Hungry Crush</h1>
          <p>Eat. Meet. Repeat.</p>
        </div>
      </div>
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          {['Home', 'Restaurants', 'Events', 'About Us', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                className={`hover:underline ${pathname === (item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`) ? 'font-bold' : ''}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        {session ? (
          <div className="relative group" ref={userMenuRef}>
            <Button 
              variant="ghost" 
              className="flex items-center space-x-2"
              onMouseEnter={() => setIsUserMenuOpen(true)}
            >
              <User className="w-5 h-5" />
              <span>{session.user?.name}</span>
            </Button>
            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ${isUserMenuOpen ? 'block' : 'hidden'}`}>
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
            </div>
          </div>
        ) : (
          <div className="space-x-2">
            <Link href="/auth/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  ), [session, pathname, isUserMenuOpen])

  return (
    <header className="w-full bg-[#b40030] text-white py-4">
      <div className="container mx-auto px-4">
        {memoizedHeader}
        {pathname === '/' && (
          <div className="mt-4">
            <form onSubmit={handleSearch} className="w-full max-w-2xl">
              <div className="flex">
                <Input 
                  type="text" 
                  placeholder="Search restaurant or event names..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow rounded-l-md border border-input bg-white px-3 py-2 text-sm text-black"
                  aria-label="Search restaurants or events"
                />
                {searchQuery && (
                  <Button type="button" onClick={clearSearch} className="rounded-none">
                    <X className="w-4 h-4" />
                  </Button>
                )}
                <Button type="submit" className="rounded-l-none">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}
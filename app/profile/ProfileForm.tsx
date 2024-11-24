'use client'

import { useState } from 'react'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ProfileFormProps = {
  user: User
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const [name, setName] = useState(user.name || '')
  const [email, setEmail] = useState(user.email || '')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      if (response.ok) {
        setSuccess('Your profile has been successfully updated.')
        router.refresh()
      } else {
        const data = await response.json()
        throw new Error(data.message || 'Failed to update profile')
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred while updating your profile.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image 
            src={user.image || '/placeholder.svg?height=80&width=80'} 
            alt={user.name || 'User avatar'} 
            width={80} 
            height={80}
            className="object-cover"
          />
        </div>
        <Button type="button" variant="outline">Change Avatar</Button>
      </div>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Update Profile'}
      </Button>
    </form>
  )
}
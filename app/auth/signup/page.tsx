'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent, signUpMethod: 'email' | 'mobile') => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, [signUpMethod]: signUpMethod === 'email' ? email : mobile, password }),
      })

      if (response.ok) {
        // Sign in the user after successful signup
        const result = await signIn('credentials', {
          redirect: false,
          [signUpMethod]: signUpMethod === 'email' ? email : mobile,
          password,
        })

        if (result?.error) {
          setError(result.error)
        } else {
          router.push('/')
        }
      } else {
        const data = await response.json()
        setError(data.message || 'An error occurred during signup')
      }
    } catch (error) {
      console.error('An error occurred', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger 
                value="email"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Email
              </TabsTrigger>
              <TabsTrigger 
                value="mobile"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Mobile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={(e) => handleSubmit(e, 'email')}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name-email" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input
                      id="name-email"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password-email" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input
                      id="password-email"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-6" disabled={isLoading}>
                  {isLoading ? 'Signing Up...' : 'Sign Up with Email'}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="mobile">
              <form onSubmit={(e) => handleSubmit(e, 'mobile')}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name-mobile" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input
                      id="name-mobile"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password-mobile" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input
                      id="password-mobile"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-6" disabled={isLoading}>
                  {isLoading ? 'Signing Up...' : 'Sign Up with Mobile'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6">
              <Button onClick={handleGoogleSignUp} variant="outline" className="w-full">
                Sign in with Google
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            Already have an account? <a href="/auth/signin" className="text-blue-600 hover:underline">Sign in</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
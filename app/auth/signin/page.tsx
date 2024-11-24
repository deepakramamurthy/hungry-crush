'use client'

import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignInPage() {
  const [emailOrMobile, setEmailOrMobile] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()

  useEffect(() => {
    const error = searchParams.get('error')
    if (error) {
      if (error === 'OAuthAccountNotLinked') {
        setError('An account with this email already exists. Please sign in with your password to link your Google account.')
      } else {
        setError(`Authentication error: ${error}`)
      }
      console.error('Authentication error:', error)
    }
  }, [searchParams])

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: emailOrMobile,
        password,
      })
      if (result?.error) {
        setError(result.error)
        console.error('Sign-in error:', result.error)
      } else {
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      console.error('An error occurred', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error('Google sign-in error:', error)
      setError('An error occurred during Google sign-in. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Welcome back! Please sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 text-sm mt-2 mb-4">{error}</p>}
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1">
              <TabsTrigger 
                value="email"
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Email
              </TabsTrigger>
              <TabsTrigger 
                value="mobile"
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Mobile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={emailOrMobile}
                      onChange={(e) => setEmailOrMobile(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-6" disabled={isLoading}>
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="mobile">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={emailOrMobile}
                      onChange={(e) => setEmailOrMobile(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-6" disabled={isLoading}>
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
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
              <Button onClick={handleGoogleSignIn} variant="outline" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign in with Google'}
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            Don't have an account? <a href="/auth/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
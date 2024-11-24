import ClientSessionProvider from '@/components/ClientSessionProvider'
import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hungry Crush',
  description: 'Discover and book the best restaurants in your area',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSessionProvider session={session}>
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-[#b40030] text-white py-4">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <section>
                  <h3 className="text-lg font-semibold mb-2">About Hungry Crush</h3>
                  <p className="text-sm">Discover and book the best restaurants in your area. Join food events and meet fellow foodies.</p>
                </section>
                <section>
                  <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                  <p className="text-sm">Email: <a href="mailto:info@hungrycrush.com" className="hover:underline">info@hungrycrush.com</a></p>
                  <p className="text-sm">Phone: <a href="tel:+11234567890" className="hover:underline">(123) 456-7890</a></p>
                </section>
                <section>
                  <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://facebook.com/hungrycrush" className="text-sm hover:text-gray-300" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                    <a href="https://twitter.com/hungrycrush" className="text-sm hover:text-gray-300" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
                    <a href="https://instagram.com/hungrycrush" className="text-sm hover:text-gray-300" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                  </div>
                </section>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Hungry Crush. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ClientSessionProvider>
      </body>
    </html>
  )
}
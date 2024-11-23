import ClientSessionProvider from '@/components/ClientSessionProvider'
import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hungry Crush',
  description: 'Discover and book the best restaurants in your area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSessionProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-[#b40030] text-white py-4">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About Hungry Crush</h3>
                  <p className="text-sm">Discover and book the best restaurants in your area. Join food events and meet fellow foodies.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                  <p className="text-sm">Email: info@hungrycrush.com</p>
                  <p className="text-sm">Phone: (123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-sm hover:text-gray-300">Facebook</a>
                    <a href="#" className="text-sm hover:text-gray-300">Twitter</a>
                    <a href="#" className="text-sm hover:text-gray-300">Instagram</a>
                  </div>
                </div>
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
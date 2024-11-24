import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:info@hungrycrush.com" className="hover:underline">info@hungrycrush.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>123 Foodie Street, Gourmet City, FC 12345</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
          <ul className="space-y-1">
            <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
            <li>Saturday: 10:00 AM - 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
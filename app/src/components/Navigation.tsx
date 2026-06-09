import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/logo.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/courses', label: 'Courses' },
  { path: '/studio', label: 'The Studio' },
  { path: '/apply', label: 'Apply' },
  { path: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-[#1a2a4a] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-0.5 md:py-1">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="JICA Logo" className="w-20 h-20 md:w-28 md:h-28 -my-2 md:-my-4 object-contain transition-transform duration-300 hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base md:text-lg tracking-wider leading-none">JICA</span>
              <span className="hidden sm:inline text-[#9ab] text-[10px] tracking-wide mt-1">Jamnagar Institute of Cinema & AI</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#b87333] bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1a2a4a] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${
                location.pathname === link.path ? 'text-[#b87333]' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

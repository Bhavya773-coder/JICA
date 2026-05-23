import { Link } from 'react-router-dom'
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#1a2a4a] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="JICA Logo" className="w-8 h-8 object-contain" />
              <span className="text-white font-bold text-sm">JICA</span>
            </div>
            <p className="text-sm">A fun play incubator for young creators. Hard-bound books. Real machines. Real work.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Explore</h4>
            <div className="space-y-2">
              <Link to="/courses" className="block text-sm hover:text-[#b87333]">Courses</Link>
              <Link to="/studio" className="block text-sm hover:text-[#b87333]">The Studio</Link>
              <Link to="/about" className="block text-sm hover:text-[#b87333]">About</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Institute</h4>
            <div className="space-y-2">
              <span className="block text-sm">20 seats per batch</span>
              <span className="block text-sm">Hard-bound books</span>
              <span className="block text-sm">6 GPU machines</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <span className="block text-white font-medium">contact@jica.in</span>
              <span className="block text-xs leading-relaxed">
                ARCADIA SHIPPING & TRADING CO.<br />
                VINIT ARVINDBHAI SHAH<br />
                5th Floor, Citypoint, Opp-Townhall,<br />
                Jamnagar - 361000<br />
                Phone: 7707808080
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; 2026 JICA. All rights reserved.</p>
          <span className="text-xs text-white/40">Scholarship terms apply. Not guaranteed income.</span>
        </div>
      </div>
    </footer>
  )
}

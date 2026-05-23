import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2a4a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-[#b87333]">Touch</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            We read every message. Reach out for admissions, studio work, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-[#1a2a4a] rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#b87333]" />
              </div>
              <h3 className="font-bold text-[#1a2a4a] mb-2">Email</h3>
              <p className="text-[#5a6a7a] text-sm mb-1">General & Client Queries</p>
              <p className="text-[#1a2a4a] font-medium text-sm">contact@jica.in</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-[#1a2a4a] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#b87333]" />
              </div>
              <h3 className="font-bold text-[#1a2a4a] mb-2">Address</h3>
              <p className="text-[#1a2a4a] font-medium text-xs max-w-[240px] leading-relaxed">
                ARCADIA SHIPPING & TRADING CO.<br />
                VINIT ARVINDBHAI SHAH<br />
                5TH FLOOR, CITYPOINT, OPP-TOWNHALL, JAMNAGAR - 361000
              </p>
              <p className="text-[#5a6a7a] text-xs mt-2 font-semibold">
                Phone: 7707808080
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-12 h-12 bg-[#1a2a4a] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#b87333]" />
              </div>
              <h3 className="font-bold text-[#1a2a4a] mb-2">Response Time</h3>
              <p className="text-[#1a2a4a] font-medium text-sm">1-3 Business Days</p>
              <p className="text-[#5a6a7a] text-sm mt-2">Every application is reviewed personally.</p>
              <p className="text-[#5a6a7a] text-sm mt-1">No automated responses. No chatbots.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#1a2a4a] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to <span className="text-[#b87333]">Apply?</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Next batch is forming now. 20 seats only. Small. Intimate. Real. Submit your application and we will review it personally.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#9a5f2a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Start Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* For Students / For Clients */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-[#2d5a4f]" />
                <span className="text-[#2d5a4f] text-sm font-semibold tracking-wider">FOR STUDENTS</span>
              </div>
              <h3 className="font-bold text-[#1a2a4a] mb-3">Want to learn AI cinema?</h3>
              <p className="text-[#5a6a7a] text-sm mb-4">
                Apply for Quick Creator (8 weeks, online-friendly) or Masters in AI Cinema (3 months, physical GPU lab). Both include hard-bound books, daily creation, and scholarship recovery.
              </p>
              <Link to="/courses" className="text-[#b87333] font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Explore Courses <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-[#b87333]" />
                <span className="text-[#b87333] text-sm font-semibold tracking-wider">FOR CLIENTS</span>
              </div>
              <h3 className="font-bold text-[#1a2a4a] mb-3">Need AI VFX work?</h3>
              <p className="text-[#5a6a7a] text-sm mb-4">
                We deliver AI character generation, motion synthesis, and batch frame processing for UK and European production houses. Boutique studio. Big output.
              </p>
              <Link to="/studio" className="text-[#b87333] font-semibold text-sm hover:underline inline-flex items-center gap-1">
                View Studio Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

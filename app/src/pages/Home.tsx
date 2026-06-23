import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Cpu, Users, Zap, Award, TrendingUp, Star } from 'lucide-react'
import useSEO from '@/hooks/useSEO'

const scholarshipTiers = [
  { rank: 'Top 1%', recovery: '100%', label: 'Platinum' },
  { rank: 'Top 5%', recovery: '80%', label: 'Gold' },
  { rank: 'Top 20%', recovery: '70%', label: 'Silver' },
  { rank: 'Top 50%', recovery: '60%', label: 'Bronze' },
  { rank: 'All Completing', recovery: '50%', label: 'Completion' },
]

const testimonials = [
  { name: 'Rajesh M.', role: 'VFX Artist, Mumbai', text: 'The 30-day accelerator changed how I work. I went from zero AI knowledge to generating client-ready concept art.' },
  { name: 'Priya K.', role: 'Independent Filmmaker', text: 'The scholarship recovery motivated me to produce my best work every single day. I recovered 80% of my fees.' },
  { name: 'Ahmed S.', role: 'Film Student, Pune', text: 'This is not a classroom. It is a playground where you learn by creating real things. My portfolio speaks for itself.' },
]

export default function Home() {
  useSEO({
    title: "JICA | Jamnagar Institute of Cinema & AI - India's First AI Cinema Incubator",
    description: "JICA is a premier AI cinema incubator in Jamnagar, India. Learn AI tools, prompt engineering, LoRA training, and virtual production with RTX 3090 GPUs and 50-100% scholarship recovery.",
    keywords: "JICA, JICA Jamnagar, Jamnagar Institute of Cinema & AI, AI Cinema Jamnagar, JICA in Jamnagar, Learn AI Cinema, Indian AI Film Incubator, VFX Jamnagar, Krishang Vadgama JICA"
  })

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'ld-json-schema'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "name": "JICA - Jamnagar Institute of Cinema & AI",
      "alternateName": "Jamnagar Institute of Cinema & AI",
      "description": "India's first play incubator and studio for young creators merging cinema and artificial intelligence. 20 seats per batch, hard-bound books, and powerful studio GPU workstations.",
      "url": window.location.origin,
      "logo": window.location.origin + "/src/assets/jica-logo.png",
      "image": window.location.origin + "/src/assets/jica-logo.png",
      "telephone": "+91-7707808080",
      "email": "contact@jica.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ARCADIA SHIPPING & TRADING CO., 5th Floor, Citypoint, Opp-Townhall",
        "addressLocality": "Jamnagar",
        "addressRegion": "Gujarat",
        "postalCode": "361000",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.4707",
        "longitude": "70.0577"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    })
    document.head.appendChild(script)
    return () => {
      const existingScript = document.getElementById('ld-json-schema')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#1a2a4a] via-[#1a2a4a] to-[#e8dcc8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #b87333 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#b87333]/30 px-4 py-1.5 rounded-full mb-6">
              <Star className="w-3.5 h-3.5 text-[#b87333]" />
              <span className="text-xs tracking-wider text-[#b87333] font-medium">20 SEATS PER BATCH</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 tracking-tight">
              A Fun Play<br />
              <span className="text-[#b87333]">Incubator</span> for<br />
              Young Creators
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-xl leading-relaxed">
              Hard-bound books. Real GPU machines. Create every day. Publish publicly. Rank on the leaderboard.
            </p>
            <p className="text-sm text-[#b87333] mb-8 font-medium">
              Recover 50-100% of your fees through performance-based scholarship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#9a5f2a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#b87333] text-white hover:text-[#b87333] font-medium px-8 py-4 rounded-lg transition-colors"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes JICA Different */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Not a School. An Incubator.</h2>
            <p className="text-[#5a6a7a] max-w-2xl mx-auto">
              We do not do lectures. We do production. You sit at a real table, open a hard-bound book, and create something every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#1a2a4a]/5">
              <div className="w-12 h-12 bg-[#1a2a4a] rounded-lg flex items-center justify-center mb-5">
                <BookOpen className="w-6 h-6 text-[#b87333]" />
              </div>
              <h3 className="text-lg font-bold text-[#1a2a4a] mb-2">Hard-Bound Books</h3>
              <p className="text-[#5a6a7a] text-sm">Every student receives a premium field manual. Tactile learning. Weight in your hands. No screens-only education.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#1a2a4a]/5">
              <div className="w-12 h-12 bg-[#1a2a4a] rounded-lg flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6 text-[#b87333]" />
              </div>
              <h3 className="text-lg font-bold text-[#1a2a4a] mb-2">High-End Studio GPUs</h3>
              <p className="text-[#5a6a7a] text-sm">Access to our powerful studio workstations. Not cloud credits. Train your own LoRA models using our high-end infrastructure.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#1a2a4a]/5">
              <div className="w-12 h-12 bg-[#1a2a4a] rounded-lg flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-[#b87333]" />
              </div>
              <h3 className="text-lg font-bold text-[#1a2a4a] mb-2">20 Seats Only</h3>
              <p className="text-[#5a6a7a] text-sm">Focused batch. Intimate. Everyone gets hands-on time. Everyone gets feedback. No one gets lost in the crowd.</p>
            </div>
          </div>

          {/* The Daily Rhythm */}
          <div className="bg-[#1a2a4a] rounded-2xl p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">The Daily Rhythm</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Learn', desc: '15 min of tactical theory. One concept. No fluff.', color: 'text-[#b87333]' },
                { step: '02', title: 'Create', desc: '30 min of hands-on production. Generate. Build. Export.', color: 'text-[#2d5a4f]' },
                { step: '03', title: 'Publish', desc: 'Post publicly. Tag #CineAI. Build audience from Day 1.', color: 'text-[#b87333]' },
                { step: '04', title: 'Compete', desc: 'Upload to JICA. Get scored. Climb the leaderboard.', color: 'text-[#2d5a4f]' },
              ].map((item) => (
                <div key={item.step} className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10">
                  <span className={`text-3xl font-bold ${item.color}`}>{item.step}</span>
                  <h4 className="text-white font-bold mt-2 mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#2d5a4f]/10 px-4 py-1.5 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-[#2d5a4f]" />
              <span className="text-xs tracking-wider text-[#2d5a4f] font-semibold">PERFORMANCE-BASED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Creator Scholarship Recovery</h2>
            <p className="text-[#5a6a7a] max-w-2xl mx-auto">
              Not guaranteed income. Not a get-rich-quick scheme. Merit-based educational rewards for creators who ship exceptional work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {scholarshipTiers.map((tier, i) => (
              <div key={i} className="bg-[#e8dcc8] rounded-xl p-5 text-center border-2 border-[#1a2a4a]/10">
                <div className="text-xs font-semibold text-[#b87333] tracking-wider mb-2">{tier.label}</div>
                <div className="text-3xl font-bold text-[#1a2a4a] mb-1">{tier.recovery}</div>
                <div className="text-xs text-[#5a6a7a]">{tier.rank}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1a2a4a] rounded-xl p-6 md:p-8 text-center">
            <p className="text-white/80 text-sm">
              <strong className="text-[#b87333]">All completing students</strong> recover minimum 50% of fees.
              Top performers recover up to 100%. Based on cumulative rank across all 30 days + final examination.
            </p>
          </div>
        </div>
      </section>

      {/* Two Courses */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Two Paths. One Goal.</h2>
            <p className="text-[#5a6a7a]">Choose the track that fits your ambition.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Creator */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#1a2a4a]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#b87333] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">POPULAR</div>
              <h3 className="text-2xl font-bold text-[#1a2a4a] mb-2">Quick Creator</h3>
              <p className="text-[#b87333] font-semibold text-sm mb-4">8 Weeks | For Entrepreneurs & Artists</p>
              <p className="text-[#5a6a7a] mb-6">Learn AI cinema tools fast. Create content. Sell online. End with a real transaction. This is for creators who want to start earning immediately.</p>
              <ul className="space-y-2 mb-8">
                {['AI Image & Video Generation', 'Prompt Engineering Mastery', 'LoRA Training Basics', 'Content Creation for Social Media', 'Pricing & Distribution', 'Real Sale to Graduate'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#1a2a4a]">
                    <Zap className="w-4 h-4 text-[#b87333] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="inline-flex items-center gap-2 text-[#b87333] font-semibold text-sm hover:underline">
                Full Curriculum <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Masters */}
            <div className="bg-[#1a2a4a] rounded-2xl p-8 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2">Masters in AI Cinema</h3>
              <p className="text-[#b87333] font-semibold text-sm mb-4">3 Months | For Serious Filmmakers</p>
              <p className="text-white/70 mb-6">Deep cinema foundation + full AI pipeline + professional studio operations. Graduate with a complete portfolio and studio-ready skills.</p>
              <ul className="space-y-2 mb-8">
                {['Month 1: Cinema Foundation', 'Month 2: AI Pipeline Mastery', 'Month 3: Project & Portfolio', 'ComfyUI + ControlNet + LoRA Deep Dive', 'Studio Operations & Asset Management', 'Certificate + Scholarship Eligibility'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <Award className="w-4 h-4 text-[#b87333] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="inline-flex items-center gap-2 text-[#b87333] font-semibold text-sm hover:underline">
                Full Curriculum <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2a4a] text-center mb-12">What Creators Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#e8dcc8] rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />)}
                </div>
                <p className="text-[#1a2a4a] text-sm mb-4 italic">"{t.text}"</p>
                <div className="text-[#b87333] text-sm font-semibold">{t.name}</div>
                <div className="text-[#5a6a7a] text-xs">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            20 Seats. <span className="text-[#b87333]">One Batch at a Time.</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Focused. Real. You sit at the table, open the book, and create. GPU machines hum in the background. This is where Indian AI cinema begins.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#9a5f2a] text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Apply for Next Batch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, BookOpen, Cpu, Award, Zap, TrendingUp } from 'lucide-react'

const quickCreatorModules = [
  'Week 1: AI Foundations & First Images',
  'Week 2: Video Generation & Motion',
  'Week 3: LoRA Training & Consistency',
  'Week 4: ComfyUI & ControlNet',
  'Week 5: AI Editing in DaVinci Resolve',
  'Week 6: VFX Compositing',
  'Week 7: Hybrid Filmmaking',
  'Week 8: Sell Your Work + Real Transaction',
]

const mastersMonth1 = [
  'Session 1-4: Storytelling Foundations',
  'Session 5-8: Direction & Shot Language',
  'Session 9-12: Performance & Camera',
  'Session 13-16: Lighting & Composition',
]

const mastersMonth2 = [
  'Day 1-4: AI Foundations & Prompt Engineering',
  'Day 5-8: AI Image Generation Mastery',
  'Day 9-12: AI Video & Motion',
  'Day 13-17: LoRA Mastery Deep Dive',
  'Day 18-20: ComfyUI & ControlNet',
  'Day 21-23: AI Editing & Pacing',
  'Day 24-25: VFX Compositing',
  'Day 26-27: Hybrid Filmmaking',
  'Day 28-30: Studio Operations & Pipeline',
]

const mastersMonth3 = [
  'Week 1-2: Final Project Pre-Production',
  'Week 3-6: Production & Creation',
  'Week 7-8: Post-Production & Delivery',
  'Week 9: Portfolio Presentation',
  'Week 10: Final Examination & Certification',
]

export default function Courses() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2a4a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Two <span className="text-[#b87333]">Courses</span>. One Goal.</h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Choose your path. Both lead to real creation, real publication, and real scholarship recovery.
          </p>
        </div>
      </section>

      {/* Quick Creator */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#b87333] text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
              <span className="bg-[#2d5a4f]/10 text-[#2d5a4f] text-xs font-bold px-3 py-1 rounded-full">8 WEEKS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-2">Quick Creator</h2>
            <p className="text-[#b87333] font-semibold mb-4">For Entrepreneurs, Artists & Content Creators</p>
            <p className="text-[#5a6a7a] mb-8 max-w-3xl">
              Learn AI cinema tools fast. Create content daily. Build an audience. And most importantly — 
              <strong className="text-[#1a2a4a]"> make a real sale before you graduate</strong>. This course ends with a real transaction.
              Real money. Real proof that your skills work.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-[#1a2a4a] mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#b87333]" /> 8-Week Curriculum
                </h3>
                <ul className="space-y-3">
                  {quickCreatorModules.map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1a2a4a]">
                      <CheckCircle className="w-4 h-4 text-[#2d5a4f] flex-shrink-0 mt-0.5" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#1a2a4a] mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#b87333]" /> What You Get
                </h3>
                <ul className="space-y-3">
                  {[
                    'Hard-bound Director\'s Code field manual',
                    'Daily hands-on GPU lab access',
                    'Auto-graded submissions + leaderboard',
                    'Public portfolio of 30+ creations',
                    'Real client sale (required to graduate)',
                    'Scholarship recovery eligible (50-100%)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1a2a4a]">
                      <TrendingUp className="w-4 h-4 text-[#b87333] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#1a2a4a] rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-white/60 text-sm">Course Fee</span>
                  <div className="text-white text-2xl font-bold">Rs 4,999</div>
                </div>
                <div>
                  <span className="text-white/60 text-sm">Scholarship Recovery</span>
                  <div className="text-[#b87333] font-bold">50-100%</div>
                </div>
                <Link to="/apply" className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#9a5f2a] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Masters */}
          <div className="bg-[#1a2a4a] rounded-2xl p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">COMPREHENSIVE</span>
              <span className="bg-[#b87333]/20 text-[#b87333] text-xs font-bold px-3 py-1 rounded-full">3 MONTHS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Masters in AI Cinema</h2>
            <p className="text-[#b87333] font-semibold mb-4">For Serious Filmmakers & Studio Operators</p>
            <p className="text-white/60 mb-8 max-w-3xl">
              Three months of deep, intensive training. Month 1: Cinema Foundation (taught by the Cinema Head). 
              Month 2: AI Pipeline Mastery (our field manual). Month 3: Real Project & Portfolio.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#b87333]" />
                  <h3 className="font-bold text-white">Month 1: Cinema</h3>
                </div>
                <ul className="space-y-2">
                  {mastersMonth1.map((s, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                      <span className="text-[#b87333]">-</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-[#b87333]" />
                  <h3 className="font-bold text-white">Month 2: AI Pipeline</h3>
                </div>
                <ul className="space-y-2">
                  {mastersMonth2.map((s, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                      <span className="text-[#b87333]">-</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-[#b87333]" />
                  <h3 className="font-bold text-white">Month 3: Project</h3>
                </div>
                <ul className="space-y-2">
                  {mastersMonth3.map((s, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                      <span className="text-[#b87333]">-</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-white/60 text-sm">Course Fee</span>
                  <div className="text-white text-2xl font-bold">Rs 12,000</div>
                </div>
                <div>
                  <span className="text-white/60 text-sm">Scholarship Recovery</span>
                  <div className="text-[#b87333] font-bold">50-100%</div>
                </div>
                <Link to="/apply" className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#9a5f2a] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

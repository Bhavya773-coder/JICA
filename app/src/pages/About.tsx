import { BookOpen, Cpu, Users, Target, Lightbulb, Building2 } from 'lucide-react'

const values = [
  { icon: <BookOpen className="w-6 h-6" />, title: 'Hard-Bound Books', desc: 'Tactile learning. Weight in your hands. We believe the physical book creates focus that screens cannot.' },
  { icon: <Cpu className="w-6 h-6" />, title: 'Real Machines', desc: '6 RTX 3090 GPU workstations. Not cloud credits. You sit at the machine. You train your own models.' },
  { icon: <Users className="w-6 h-6" />, title: '20 Seats Only', desc: 'Small batch. Everyone gets hands-on time. Everyone gets feedback. Intimate, not industrial.' },
  { icon: <Target className="w-6 h-6" />, title: 'Ship Every Day', desc: 'Create, publish, compete. Daily public output. No theoretical exercises — only real production work.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Sell First, Build Second', desc: 'Every student must make a real sale. A real transaction. Real money changing hands. That is graduation.' },
  { icon: <Building2 className="w-6 h-6" />, title: 'Three Arms', desc: 'Institute + GPU Training Pipeline + Studio. Students learn. Machines train at night. Studio serves international clients.' },
]

const team = [
  { role: 'Cinema Head', desc: 'Veteran filmmaker. Teaches Month 1: storytelling, direction, shot language, performance.' },
  { role: 'AI Lead', desc: 'Technical architect. Manages 17 GPU machines, ComfyUI pipelines, LoRA training systems.' },
  { role: 'Studio Manager', desc: 'International client relations. UK and European VFX contracts. Real commercial work.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2a4a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">The Story of <span className="text-[#b87333]">JICA</span></h1>
          <p className="text-white/60 max-w-2xl text-lg">
            A small studio in Jamnagar, aspiring to be the home of India's AI-native filmmaking generation.
          </p>
        </div>
      </section>

      {/* The Honest Reality */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">The Honest Reality</h2>
              <p className="text-[#5a6a7a] mb-4 leading-relaxed">
                JICA is not a large institution. It is a small, intimate creative space — a boutique incubator where 20 students at a time learn the future of filmmaking.
              </p>
              <p className="text-[#5a6a7a] mb-4 leading-relaxed">
                The studio has 6 GPU machines. Hard-bound books on the shelf. A long shared table where students sit together, open their field manuals, and create.
              </p>
              <p className="text-[#5a6a7a] leading-relaxed">
                No fake grandeur. No pretending to be bigger than we are. Just honest work, real machines, and the best AI cinema education in India.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#1a2a4a] mb-4">The Space</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a6a7a]">Location</span>
                  <span className="text-[#1a2a4a] font-medium">Jamnagar, Gujarat</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a6a7a]">Batch Size</span>
                  <span className="text-[#1a2a4a] font-medium">20 students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a6a7a]">GPU Machines</span>
                  <span className="text-[#1a2a4a] font-medium">6 (RTX 3090)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a6a7a]">Total GPUs</span>
                  <span className="text-[#1a2a4a] font-medium">17 (11 for studio)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a6a7a]">Learning Method</span>
                  <span className="text-[#1a2a4a] font-medium">Hard-bound books + GPU lab</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a6a7a]">Philosophy</span>
                  <span className="text-[#1a2a4a] font-medium">Sell first, build second</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2a4a] text-center mb-12">How We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-[#e8dcc8] rounded-xl p-6">
                <div className="text-[#b87333] mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#1a2a4a] mb-2">{v.title}</h3>
                <p className="text-[#5a6a7a] text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Arms */}
      <section className="py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Three Arms, One Mission</h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            JICA operates as a three-part creative engine. Each arm feeds the others.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-[#b87333] mb-3">01</div>
              <h3 className="text-white font-bold text-lg mb-2">The Institute</h3>
              <p className="text-white/60 text-sm">20 students per batch. Two courses. Hard-bound books. GPU lab access. Scholarship recovery. This is where creators are made.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-[#b87333] mb-3">02</div>
              <h3 className="text-white font-bold text-lg mb-2">GPU Pipeline</h3>
              <p className="text-white/60 text-sm">17 RTX 3090s. 6 for students by day. 11 train LoRA models overnight. ControlNet + MediaPipe + SDXL. The AI Actor Pipeline.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-[#b87333] mb-3">03</div>
              <h3 className="text-white font-bold text-lg mb-2">The Studio</h3>
              <p className="text-white/60 text-sm">International VFX contracts. UK and European clients. Real commercial work. Students see real production. The studio funds the institute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2a4a] text-center mb-12">The Team</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#1a2a4a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#b87333] font-bold text-xl">{member.role.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-[#1a2a4a] mb-2">{member.role}</h3>
                <p className="text-[#5a6a7a] text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { BookOpen, Cpu, Users, Target, Lightbulb, Building2, Clapperboard, Tv, Headphones } from 'lucide-react'
import useSEO from '@/hooks/useSEO'

const values = [
  { icon: <BookOpen className="w-6 h-6" />, title: 'Hard-Bound Books', desc: 'Tactile learning. Weight in your hands. We believe the physical book creates focus that screens cannot.' },
  { icon: <Cpu className="w-6 h-6" />, title: 'Real Machines', desc: 'Access to powerful GPU workstations. Not cloud credits. Train models on our studio machines.' },
  { icon: <Users className="w-6 h-6" />, title: '20 Seats Only', desc: 'Focused batch. Everyone gets hands-on time. Everyone gets feedback. Intimate, not industrial.' },
  { icon: <Target className="w-6 h-6" />, title: 'Ship Every Day', desc: 'Create, publish, compete. Daily public output. No theoretical exercises — only real production work.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Sell First, Build Second', desc: 'Every student must make a real sale. A real transaction. Real money changing hands. That is graduation.' },
  { icon: <Building2 className="w-6 h-6" />, title: 'Three Arms', desc: 'Institute + GPU Training Pipeline + Studio. Students learn. Machines train at night. Our studio produces independent AI cinema.' },
]

const team = [
  {
    name: 'Krishang Vadgama',
    role: 'Director',
    desc: 'Leading the vision and creative direction of JICA, Krishang specializes in AI-powered filmmaking, cinematic storytelling, virtual production, and modern film education. He oversees institute development, film production workflows, creative strategy, and student mentorship while building a next-generation ecosystem where cinema and artificial intelligence merge together.',
    icon: <Clapperboard className="w-6 h-6 text-[#b87333]" />
  },
  {
    role: 'Studio & Virtual Production Manager',
    desc: 'Responsible for managing JICA’s professional green screen studios, virtual production environments, AI visual labs, production equipment, and practical filmmaking sessions. Ensures seamless studio operations, cinematic lighting setups, technical supervision, and hands-on learning experiences for students during shoots and post-production workflows.',
    icon: <Tv className="w-6 h-6 text-[#b87333]" />
  },
  {
    role: 'Audio & Dubbing Engineer',
    desc: 'Managing JICA’s professional dubbing studio, sound recording sessions, dialogue editing, voice production, audio mixing, and cinematic sound workflows. Specializes in delivering industry-standard audio experiences while guiding students through modern sound design and post-production techniques.',
    icon: <Headphones className="w-6 h-6 text-[#b87333]" />
  }
]

export default function About() {
  useSEO({
    title: "About JICA | Jamnagar Institute of Cinema & AI - Our Story & Philosophy",
    description: "Discover the story of JICA (Jamnagar Institute of Cinema & AI). Learn about our 20-seat batch size, high-end GPU workstations, team, and three-armed creative model (Institute, Pipeline, and Studio).",
    keywords: "About JICA, JICA Jamnagar, Jamnagar Institute of Cinema, Krishang Vadgama JICA, AI Film Team, Cinema and AI, JICA History, AI Cinema Gujarat"
  })

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2a4a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">The Story of <span className="text-[#b87333]">JICA</span></h1>
          <p className="text-white/60 max-w-2xl text-lg">
            A premier studio in Jamnagar, aspiring to be the home of India's AI-native filmmaking generation.
          </p>
        </div>
      </section>

      {/* The Honest Reality */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">A Professional AI Cinema Studio</h2>
              <p className="text-[#5a6a7a] mb-4 leading-relaxed">
                JICA is a state-of-the-art creative space — a premier incubator where the next generation of filmmakers learn to harness the power of artificial intelligence.
              </p>
              <p className="text-[#5a6a7a] mb-4 leading-relaxed">
                Our studio is equipped with powerful, dedicated GPU workstations. Students work in a professional environment, merging traditional filmmaking sensibilities with cutting-edge AI technology.
              </p>
              <p className="text-[#5a6a7a] leading-relaxed">
                We deliver an elite AI cinema education, producing creators who are ready to lead the industry and deliver commercial-grade VFX and AI-generated content.
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
                  <span className="text-[#5a6a7a]">GPU Infrastructure</span>
                  <span className="text-[#1a2a4a] font-medium">High-end Studio Machines</span>
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
              <p className="text-white/60 text-sm">Powerful studio machines train LoRA models overnight. ControlNet + MediaPipe + SDXL. The AI Actor Pipeline.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-[#b87333] mb-3">03</div>
              <h3 className="text-white font-bold text-lg mb-2">The Studio</h3>
              <p className="text-white/60 text-sm">Real commercial projects. Students see real production workflows. The studio funds the institute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2a4a] text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative bg-[#1a2a4a] text-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/5 hover:border-[#b87333]/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white/5 group-hover:bg-[#b87333]/10 rounded-xl flex items-center justify-center transition-colors border border-white/10 group-hover:border-[#b87333]/30">
                      {member.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-[#b87333] tracking-widest uppercase bg-[#b87333]/10 px-2.5 py-1 rounded-full border border-[#b87333]/20">
                      {member.name ? 'Leadership' : 'Specialist'}
                    </span>
                  </div>

                  {member.name ? (
                    <>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#b87333] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-4">
                        {member.role}
                      </p>
                    </>
                  ) : (
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#b87333] transition-colors leading-snug">
                      {member.role}
                    </h3>
                  )}

                  <p className="text-white/70 text-sm leading-relaxed font-light">
                    {member.desc}
                  </p>
                </div>
                
                {/* Decorative bottom border on hover */}
                <div className="w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-transparent via-[#b87333] to-transparent absolute bottom-0 left-0 transition-all duration-500 rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

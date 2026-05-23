import { Cpu, Globe, HardDrive, Zap, Server, Clock, Shield } from 'lucide-react'

const services = [
  { icon: <Cpu className="w-5 h-5" />, title: 'AI Character Generation', desc: 'Consistent characters across frames using custom LoRA pipelines.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Motion & Video Synthesis', desc: 'Image-to-video, video-to-video, and temporal consistency at scale.' },
  { icon: <HardDrive className="w-5 h-5" />, title: 'VFX Compositing', desc: 'AI-generated elements composited into live-action plates.' },
  { icon: <Server className="w-5 h-5" />, title: 'Batch Processing', desc: 'Overnight GPU pipeline for large sequences. 11 machines running 24/7.' },
]

const pipelineSteps = [
  { step: '01', title: 'Script Ingest', desc: 'Scene breakdown, character definitions, style references uploaded.' },
  { step: '02', title: 'LoRA Training', desc: 'Character-specific models trained overnight on dedicated GPU cluster.' },
  { step: '03', title: 'Frame Generation', desc: 'Key frames generated with ControlNet + pose guidance.' },
  { step: '04', title: 'Motion Synthesis', desc: 'Static frames brought to life with temporal consistency models.' },
  { step: '05', title: 'Compositing', desc: 'AI elements merged with live-action footage, color-matched.' },
  { step: '06', title: 'Delivery', desc: 'Final renders delivered to client via secure pipeline.' },
]

export default function Studio() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2a4a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-[#b87333]" />
            <span className="text-[#b87333] text-sm font-semibold tracking-wider">INTERNATIONAL VFX STUDIO</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-[#b87333]">Studio</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            A small but serious AI VFX operation serving international clients. 17 GPUs. Real production work. Real revenue.
          </p>
        </div>
      </section>

      {/* The Honest Studio */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">The Honest Reality</h2>
              <p className="text-[#5a6a7a] mb-4 leading-relaxed">
                This is not a massive VFX house. It is a small, focused AI studio — a room with 17 RTX 3090 GPUs, a long table, and a team that knows how to push them to their limits.
              </p>
              <p className="text-[#5a6a7a] mb-4 leading-relaxed">
                By day, 6 machines are dedicated to students. By night, all 17 train LoRA models and process client work. The machines never sleep.
              </p>
              <p className="text-[#5a6a7a] leading-relaxed">
                We serve UK and European VFX clients who need AI-generated character sequences, motion synthesis, and batch frame processing. Small studio. Big output.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#1a2a4a] mb-4">The Machine Room</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm py-2 border-b border-[#e8dcc8]">
                  <span className="text-[#5a6a7a]">Total GPU Machines</span>
                  <span className="text-[#1a2a4a] font-bold">17 x RTX 3090</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-[#e8dcc8]">
                  <span className="text-[#5a6a7a]">Student Machines (Day)</span>
                  <span className="text-[#2d5a4f] font-bold">6 workstations</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-[#e8dcc8]">
                  <span className="text-[#5a6a7a]">Studio Machines (Night)</span>
                  <span className="text-[#b87333] font-bold">11 dedicated</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-[#e8dcc8]">
                  <span className="text-[#5a6a7a]">Primary Pipeline</span>
                  <span className="text-[#1a2a4a] font-medium">ComfyUI + ControlNet</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-[#e8dcc8]">
                  <span className="text-[#5a6a7a]">Training Stack</span>
                  <span className="text-[#1a2a4a] font-medium">SDXL + LoRA + MediaPipe</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2">
                  <span className="text-[#5a6a7a]">Uptime</span>
                  <span className="text-[#1a2a4a] font-medium flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#2d5a4f]" /> 24/7 operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2a4a] text-center mb-4">Studio Services</h2>
          <p className="text-[#5a6a7a] text-center max-w-2xl mx-auto mb-12">
            What we deliver to international clients. Every service powered by our in-house GPU pipeline.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#e8dcc8] rounded-xl p-6">
                <div className="text-[#b87333] mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#1a2a4a] mb-2">{s.title}</h3>
                <p className="text-[#5a6a7a] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pipeline */}
      <section className="py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">The AI Actor Pipeline</h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            How a client request becomes finished frames. Six steps. Fully automated where possible, artist-supervised where it matters.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pipelineSteps.map((p, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <span className="text-2xl font-bold text-[#b87333]">{p.step}</span>
                <h3 className="text-white font-bold mt-2 mb-1">{p.title}</h3>
                <p className="text-white/60 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Info */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#2d5a4f]" />
                  <span className="text-[#2d5a4f] text-sm font-semibold tracking-wider">FOR CLIENTS</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-4">Work With Us</h2>
                <p className="text-[#5a6a7a] mb-6 leading-relaxed">
                  We are a boutique AI VFX studio based in Jamnagar, India. Small team, serious output. We specialize in AI character generation, motion synthesis, and batch frame processing for film and advertising.
                </p>
                <p className="text-[#5a6a7a] mb-6 leading-relaxed">
                  Our clients are primarily in the UK and Europe — production houses and agencies who need fast, cost-effective AI VFX work without compromising on quality.
                </p>
                <div className="bg-[#e8dcc8] rounded-lg p-4">
                  <p className="text-[#1a2a4a] text-sm font-medium mb-1">Client Contact</p>
                  <p className="text-[#5a6a7a] text-sm">contact@jica.in</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#1a2a4a] mb-4">Why Clients Choose Us</h3>
                <ul className="space-y-4">
                  {[
                    'Overnight GPU pipeline — work happens while you sleep',
                    'Custom LoRA training for consistent characters',
                    'India-based pricing, international quality standards',
                    'Direct communication — no account managers, no layers',
                    'Students see real production work — fresh eyes on every project',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1a2a4a]">
                      <span className="text-[#b87333] font-bold flex-shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

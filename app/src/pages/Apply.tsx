import { useState } from 'react'
import { ArrowRight, Users, BookOpen, Cpu, CheckCircle, AlertCircle } from 'lucide-react'

type CourseOption = 'quick' | 'masters' | ''

export default function Apply() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    course: '' as CourseOption,
    background: '',
    whyJoin: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#e8dcc8]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#2d5a4f] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">Application Received</h2>
          <p className="text-[#5a6a7a] mb-6">
            Thank you for applying to JICA. We review every application personally. You will hear from us within 3 business days.
          </p>
          <p className="text-[#b87333] font-medium text-sm mb-8">
            Next batch starts soon. Only 20 seats available.
          </p>
          <div className="bg-white rounded-xl p-6 text-left shadow-sm">
            <h3 className="font-bold text-[#1a2a4a] mb-3">What happens next?</h3>
            <ol className="space-y-2 text-sm text-[#5a6a7a]">
              <li className="flex items-start gap-2"><span className="text-[#b87333] font-bold">1.</span> Application review (1-2 days)</li>
              <li className="flex items-start gap-2"><span className="text-[#b87333] font-bold">2.</span> Shortlisted candidates receive a creative task</li>
              <li className="flex items-start gap-2"><span className="text-[#b87333] font-bold">3.</span> Task submission reviewed</li>
              <li className="flex items-start gap-2"><span className="text-[#b87333] font-bold">4.</span> Final selection + payment link</li>
              <li className="flex items-start gap-2"><span className="text-[#b87333] font-bold">5.</span> Welcome kit + hard-bound book shipped</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2a4a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-[#b87333]" />
            <span className="text-[#b87333] text-sm font-semibold tracking-wider">LIMITED SEATS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Apply for <span className="text-[#b87333]">Next Batch</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            20 seats per batch. Small. Intimate. We review every application personally.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1a2a4a] mb-6">Application Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2a4a] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e8dcc8] bg-[#faf8f4] text-[#1a2a4a] focus:outline-none focus:border-[#b87333] focus:ring-1 focus:ring-[#b87333] transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2a4a] mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e8dcc8] bg-[#faf8f4] text-[#1a2a4a] focus:outline-none focus:border-[#b87333] focus:ring-1 focus:ring-[#b87333] transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2a4a] mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e8dcc8] bg-[#faf8f4] text-[#1a2a4a] focus:outline-none focus:border-[#b87333] focus:ring-1 focus:ring-[#b87333] transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2a4a] mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={form.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e8dcc8] bg-[#faf8f4] text-[#1a2a4a] focus:outline-none focus:border-[#b87333] focus:ring-1 focus:ring-[#b87333] transition-colors"
                        placeholder="Jamnagar, Mumbai, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a2a4a] mb-2">Select Course *</label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <label
                        className={`cursor-pointer rounded-xl border-2 p-5 transition-all ${
                          form.course === 'quick'
                            ? 'border-[#b87333] bg-[#b87333]/5'
                            : 'border-[#e8dcc8] hover:border-[#b87333]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="course"
                          value="quick"
                          checked={form.course === 'quick'}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        <div className="flex items-start gap-3">
                          <BookOpen className="w-5 h-5 text-[#b87333] flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-[#1a2a4a] text-sm">Quick Creator</div>
                            <div className="text-[#5a6a7a] text-xs mt-1">8 Weeks | Rs 4,999</div>
                            <div className="text-[#5a6a7a] text-xs">For entrepreneurs & artists</div>
                          </div>
                        </div>
                      </label>

                      <label
                        className={`cursor-pointer rounded-xl border-2 p-5 transition-all ${
                          form.course === 'masters'
                            ? 'border-[#b87333] bg-[#b87333]/5'
                            : 'border-[#e8dcc8] hover:border-[#b87333]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="course"
                          value="masters"
                          checked={form.course === 'masters'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-start gap-3">
                          <Cpu className="w-5 h-5 text-[#b87333] flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-[#1a2a4a] text-sm">Masters in AI Cinema</div>
                            <div className="text-[#5a6a7a] text-xs mt-1">3 Months | Rs 12,000</div>
                            <div className="text-[#5a6a7a] text-xs">For serious filmmakers</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a2a4a] mb-2">Your Background</label>
                    <input
                      type="text"
                      name="background"
                      value={form.background}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e8dcc8] bg-[#faf8f4] text-[#1a2a4a] focus:outline-none focus:border-[#b87333] focus:ring-1 focus:ring-[#b87333] transition-colors"
                      placeholder="Filmmaker, VFX artist, student, entrepreneur, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a2a4a] mb-2">Why do you want to join? *</label>
                    <textarea
                      name="whyJoin"
                      required
                      rows={4}
                      value={form.whyJoin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e8dcc8] bg-[#faf8f4] text-[#1a2a4a] focus:outline-none focus:border-[#b87333] focus:ring-1 focus:ring-[#b87333] transition-colors resize-none"
                      placeholder="Tell us what you want to create and why JICA..."
                    />
                  </div>

                  <div className="flex items-start gap-3 bg-[#e8dcc8]/50 rounded-lg p-4">
                    <AlertCircle className="w-5 h-5 text-[#b87333] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-[#5a6a7a]">
                      By applying, you understand that JICA is a physical institute in Jamnagar, Gujarat. 
                      Quick Creator can be completed remotely. Masters requires physical attendance for GPU lab access.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#9a5f2a] text-white font-semibold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Submit Application <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="bg-[#1a2a4a] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Important Notes</h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#b87333] flex-shrink-0">-</span>
                    Only 20 students per batch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b87333] flex-shrink-0">-</span>
                    Each application is reviewed personally
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b87333] flex-shrink-0">-</span>
                    Shortlisted candidates get a creative task
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b87333] flex-shrink-0">-</span>
                    Fee payment only after selection
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1a2a4a] mb-4">What You Get</h3>
                <ul className="space-y-3 text-sm text-[#5a6a7a]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2d5a4f] flex-shrink-0 mt-0.5" />
                    Hard-bound field manual
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2d5a4f] flex-shrink-0 mt-0.5" />
                    GPU lab access (Masters)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2d5a4f] flex-shrink-0 mt-0.5" />
                    Daily leaderboard ranking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2d5a4f] flex-shrink-0 mt-0.5" />
                    Scholarship recovery (50-100%)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2d5a4f] flex-shrink-0 mt-0.5" />
                    Certificate on completion
                  </li>
                </ul>
              </div>

              <div className="bg-[#2d5a4f]/10 rounded-2xl p-6">
                <h3 className="font-bold text-[#2d5a4f] mb-2">Questions?</h3>
                <p className="text-sm text-[#5a6a7a] mb-3">
                  Reach out directly. We read every email.
                </p>
                <p className="text-sm text-[#1a2a4a] font-medium">contact@jica.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

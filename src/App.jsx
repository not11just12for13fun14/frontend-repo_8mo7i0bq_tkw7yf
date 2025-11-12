import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Check, Star, Sparkles, Phone } from 'lucide-react'

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block text-xs font-medium uppercase tracking-widest text-slate-500">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/90" />
        <div className="h-[520px] sm:h-[680px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-14 sm:pt-16" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl py-24 sm:py-32"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow ring-1 ring-black/5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-violet-600" />
            Clean • Modern • Animated
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Website creation services that feel premium
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Pick a package, choose a template, and order via WhatsApp. We handle design, build, and launch with a sleek, glassmorphic style.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800 transition-colors"
            >
              View Pricing
            </a>
            <a
              href="https://wa.me/?text=Hi%2C%20I%27d%20like%20to%20order%20a%20website%20package."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-white px-5 py-3 text-sm font-medium shadow hover:bg-emerald-600 transition-colors"
            >
              <Phone className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const tiers = [
  {
    name: 'Silver',
    price: '$299',
    features: ['1 page modern site', 'Responsive design', 'Basic SEO setup', 'Delivery in 3 days'],
    highlight: false,
  },
  {
    name: 'Gold',
    price: '$699',
    features: ['Up to 5 pages', 'Animations & interactions', 'SEO + performance pass', 'Delivery in 7 days'],
    highlight: true,
  },
  {
    name: 'Diamond',
    price: '$1499',
    features: ['Unlimited pages', 'Custom components', 'CMS or blog setup', 'Priority support'],
    highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(124,58,237,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent packages"
          subtitle="Choose what fits your brand and timeline. Upgrade anytime."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative rounded-2xl border ${
                tier.highlight
                  ? 'border-violet-300/60 bg-white/70'
                  : 'border-slate-200 bg-white/60'
              } p-6 shadow-sm backdrop-blur-lg hover:shadow-lg transition-shadow`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-violet-600 text-white px-3 py-1 text-xs font-medium shadow">Most popular</span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                <Star className={`h-5 w-5 ${tier.highlight ? 'text-violet-600' : 'text-slate-300'}`} />
              </div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{tier.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/?text=I%20want%20the%20${tier.name}%20website%20package%20(${tier.price}).`}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium shadow transition-colors ${
                  tier.highlight
                    ? 'bg-violet-600 text-white hover:bg-violet-700'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Order via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const templates = [
  {
    name: 'Fintech Card',
    desc: 'Glassmorphic, 3D card aesthetic',
    tone: 'from-sky-500/20 via-fuchsia-500/20 to-violet-600/20',
  },
  {
    name: 'Agency Minimal',
    desc: 'Clean grid, bold typography',
    tone: 'from-emerald-400/20 via-teal-400/20 to-cyan-500/20',
  },
  {
    name: 'E‑Commerce Focus',
    desc: 'Product‑first, conversion optimized',
    tone: 'from-amber-400/20 via-rose-400/20 to-red-500/20',
  },
]

function Templates() {
  return (
    <section id="templates" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Templates"
          title="Pick a starting point"
          subtitle="Card-shaped layouts with modern motion and polished visuals."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur-lg hover:shadow-lg transition-shadow"
            >
              <div className={`h-40 rounded-xl bg-gradient-to-br ${t.tone} ring-1 ring-black/5 shadow-inner`} />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href="https://wa.me/?text=I%27d%20like%20this%20template%20with%20the%20Gold%20package."
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-violet-700 hover:text-violet-800"
                >
                  Use this template →
                </a>
                <div className="text-[11px] text-slate-500">Card-style</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 via-fuchsia-500 to-violet-600 shadow-inner" />
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Vibe Sites. All rights reserved.</p>
        </div>
        <a
          id="order"
          href="https://wa.me/?text=Hi%20Vibe%20Sites%2C%20I%27m%20ready%20to%20start%20my%20project."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-600 transition-colors"
        >
          <Phone className="h-4 w-4" /> Order via WhatsApp
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Simple top nav inline for cleanliness */}
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 via-fuchsia-500 to-violet-600 shadow-inner" />
            <span className="text-lg font-semibold tracking-tight">Vibe Sites</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#templates" className="hover:text-slate-900 transition-colors">Templates</a>
            <a href="#order" className="hover:text-slate-900 transition-colors">Order</a>
          </nav>
          <a
            href="https://wa.me/?text=Hi%20I%27m%20interested%20in%20a%20website%20package"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-600 transition-colors"
          >
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>

      <Hero />
      <Pricing />
      <Templates />
      <Footer />
    </div>
  )
}

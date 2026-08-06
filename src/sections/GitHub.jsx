import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../animations/Reveal.jsx'
import { profile } from '../data/content.js'

const languages = [
  { name: 'Python', pct: 58 },
  { name: 'Jupyter Notebook', pct: 26 },
  { name: 'C++', pct: 16 },
]

const repos = [
  { name: 'ResQ — AI Disaster Response Assistant', lang: 'Python' },
  { name: 'breast-cancer-prediction', lang: 'Python' },
  { name: 'smoke-detection', lang: 'C++' },
  { name: 'wine_quality', lang: 'Jupyter Notebook' },
]

export default function GitHub() {
  const [stats, setStats] = useState({ repos: '—', followers: '—', gists: '—' })

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUsername}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) =>
        setStats({
          repos: d.public_repos ?? '—',
          followers: d.followers ?? '—',
          gists: d.public_gists ?? '—',
        })
      )
      .catch(() => setStats({ repos: '10+', followers: '—', gists: '—' }))
  }, [])

  return (
    <section id="github" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">GitHub</div>
          <h2 className="font-display text-[28px] md:text-[38px]">Where the code lives</h2>
          <p className="text-textMute mt-4 text-base">Live data, pulled directly from GitHub.</p>
        </Reveal>

        <Reveal className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="border border-border rounded-2xl p-8 bg-card">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-sm text-textMute">@{profile.githubUsername}</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-4 py-2 rounded-full text-sm hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Visit GitHub ↗
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3.5 mb-7">
              {[
                ['Repositories', stats.repos],
                ['Followers', stats.followers],
                ['Public Gists', stats.gists],
              ].map(([label, value]) => (
                <div key={label} className="border border-border rounded-xl p-4 text-center bg-bgSoft">
                  <b className="font-display text-xl block">{value}</b>
                  <span className="text-[11.5px] uppercase text-textFaint">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              {repos.map((r) => (
                <div
                  key={r.name}
                  className="flex justify-between items-center px-4 py-3.5 border border-border rounded-lg text-sm hover:border-accent hover:bg-accentSoft transition-colors duration-200"
                >
                  <span>{r.name}</span>
                  <span className="font-mono text-xs text-textFaint">{r.lang}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-2xl p-7 bg-bgSoft flex flex-col justify-between">
            <div>
              <h4 className="text-base font-medium mb-5">Top Languages</h4>
              <div className="flex flex-col gap-3.5">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex justify-between text-[13px] mb-1.5">
                      <span>{l.name}</span>
                      <span>{l.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded bg-bg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                        className="h-full rounded bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex justify-center items-center bg-gradient-to-br from-primary to-[#5B3FE0] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-[0_10px_35px_-8px_rgba(124,92,255,0.6)] transition-shadow duration-300"
            >
              See full activity →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

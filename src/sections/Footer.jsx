import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border text-center text-textFaint text-[13px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        © {new Date().getFullYear()} {profile.name}. Designed &amp; built from scratch.
      </div>
    </footer>
  )
}

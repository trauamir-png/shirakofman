import { Link } from 'react-router-dom';
import { nav, siteConfig } from '../data/content';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* ── Main 3-column grid ── */}
        <div
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >

          {/* 1. Logo + tagline */}
          <div className="flex flex-col items-center">
            {/* text-align:center גורם לתמונה (inline) להיחתך שווה משני הצדדים,
                כך שאזור הטקסט של הלוגו מופיע בדיוק באמצע */}
            <div style={{ overflow: 'hidden', height: '120px', width: 300, textAlign: 'center' }}>
              <img
                src="/assets/logo.png"
                alt="שירה קופמן"
                style={{
                  height: '400px',
                  width: 'auto',
                  verticalAlign: 'top',
                  marginTop: '-110px',
                  filter: 'invert(1)',
                }}
              />
            </div>
            <p
              className="text-sm font-light leading-relaxed mt-3"
              style={{ color: '#94a3b8', width: 300, textAlign: 'center' }}
            >
              ליווי משפטי מקצועי, אישי ודיסקרטי.
            </p>
            <div className="h-px mt-5" style={{ backgroundColor: '#516A73', width: 40 }} />
          </div>

          {/* 2. Navigation */}
          <div className="flex flex-col">
            <h4
              className="text-sm font-semibold mb-6"
              style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}
            >
              ניווט
            </h4>
            <nav className="flex flex-col gap-3.5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-light transition-colors duration-200 w-fit"
                  style={{ color: '#CBD5E1' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Contact */}
          <div className="flex flex-col">
            <h4
              className="text-sm font-semibold mb-6"
              style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}
            >
              פרטי קשר
            </h4>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs mb-1" style={{ color: '#64748B' }}>טלפון</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
                  className="text-sm font-light transition-colors duration-200"
                  style={{ color: '#CBD5E1' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: '#64748B' }}>אימייל</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-light transition-colors duration-200"
                  style={{ color: '#CBD5E1' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: '#64748B' }}>כתובת</p>
                <span className="text-sm font-light" style={{ color: '#CBD5E1' }}>
                  {siteConfig.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: '#FFFFFF' }}>
            © כל הזכויות שמורות לשירה קופמן
          </p>
          <p className="text-xs" style={{ color: '#FFFFFF' }}>
            נבנה על ידי{' '}
            <a
              href="https://amirtrau.co.il"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-200"
              style={{ color: '#3B82F6' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#93C5FD')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#3B82F6')}
            >
              אמיר טראו
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

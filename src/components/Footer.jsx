import { Link } from 'react-router-dom';
import { nav, siteConfig } from '../data/content';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* ── Main grid ── */}
        <div
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >

          {/* 1. Navigation — second on mobile, middle on desktop */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-2">
            <h4
              className="text-sm font-semibold mb-6"
              style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}
            >
              ניווט
            </h4>
            <nav className="flex flex-col gap-3.5 items-center md:items-start">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-light transition-colors duration-200"
                  style={{ color: '#CBD5E1' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/privacy-policy"
                className="text-sm font-light transition-colors duration-200"
                style={{ color: '#CBD5E1' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                מדיניות פרטיות
              </Link>
            </nav>
          </div>

          {/* 2. Contact — third on mobile, last on desktop */}
          <div className="flex flex-col items-center md:items-start order-3 md:order-3">
            <h4
              className="text-sm font-semibold mb-6"
              style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}
            >
              פרטי קשר
            </h4>
            <div className="flex flex-col gap-5 items-center md:items-start">
              <div className="text-center md:text-right">
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
              <div className="text-center md:text-right">
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
              <div className="text-center md:text-right">
                <p className="text-xs mb-1" style={{ color: '#64748B' }}>כתובת</p>
                <span className="text-sm font-light" style={{ color: '#CBD5E1' }}>
                  {siteConfig.address}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Logo — first on mobile, first (rightmost) on desktop */}
          <div className="flex flex-col items-center order-1 md:order-1">

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
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-xs" style={{ color: '#FFFFFF' }}>
              © כל הזכויות שמורות לשירה קופמן
            </p>
            <Link
              to="/privacy-policy"
              className="text-xs transition-colors duration-200"
              style={{ color: '#64748B' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              מדיניות פרטיות
            </Link>
          </div>
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

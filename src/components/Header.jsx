import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav } from '../data/content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const bars = (
    <button
      className="flex-shrink-0 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="תפריט ניווט"
    >
      <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#0F172A' }} />
      <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#0F172A' }} />
      <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#0F172A' }} />
    </button>
  );

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ borderBottom: '1px solid #E5E7EB' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* ── מובייל: המבורגר ראשון (=ימני ב-RTL) + לוגו מילוי ── */}
        <div className="lg:hidden flex items-center gap-3" style={{ height: '170px' }}>
          {bars}
          <Link
            to="/"
            style={{ flex: 1, overflow: 'hidden', height: '165px', display: 'block', textAlign: 'center' }}
          >
            <img
              src="/assets/logo.png"
              alt="שירה קופמן - לוגו"
              style={{ height: '400px', width: 'auto', verticalAlign: 'top', marginTop: '-110px' }}
            />
          </Link>
        </div>

        {/* ── דסקטופ: פריסה קיימת ── */}
        <div className="hidden lg:flex items-center justify-between" style={{ height: '170px' }}>
          <Link to="/" className="flex-shrink-0" style={{ overflow: 'hidden', height: '165px', width: '390px', display: 'block' }}>
            <img
              src="/assets/logo.png"
              alt="שירה קופמן - לוגו"
              style={{ height: '460px', width: 'auto', display: 'block', marginTop: '-126px' }}
            />
          </Link>

          <nav className="flex items-center gap-7">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{ color: isActive ? '#516A73' : '#374151' }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 right-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: '#516A73', width: isActive ? '100%' : '0' }}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className="text-sm font-medium px-5 py-2.5 transition-all duration-300"
            style={{ backgroundColor: '#0F172A', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
          >
            לתיאום פגישה
          </Link>
        </div>

        {/* תפריט מובייל נפתח */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
          style={{ borderTop: menuOpen ? '1px solid #E5E7EB' : 'none' }}
        >
          <nav className="flex flex-col pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="py-3 text-sm font-medium border-b transition-colors"
                style={{ borderColor: '#F3F4F6', color: pathname === item.href ? '#516A73' : '#374151' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 text-center text-sm font-medium py-3 text-white"
              style={{ backgroundColor: '#0F172A' }}
            >
              לתיאום פגישה
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

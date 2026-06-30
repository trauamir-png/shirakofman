import { Link } from 'react-router-dom';
import { hero, siteConfig, values, practiceAreas, processSteps } from '../data/content';

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundColor: '#FFFFFF', paddingTop: '170px' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(81,106,115,0.04) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(15,23,42,0.03) 0%, transparent 50%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-20">

            {/* Text */}
            <div className="flex flex-col justify-center items-center md:items-start order-2 lg:order-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
                  {siteConfig.name} &nbsp;|&nbsp; {siteConfig.title}
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug mb-6 text-center md:text-right"
                style={{ color: '#0F172A', letterSpacing: '-0.5px' }}
              >
                {hero.headline}
                <br />
                <span className="font-medium">{hero.headlineSub}</span>
              </h1>
              <div className="h-px w-16 mb-6 mx-auto md:mx-0" style={{ backgroundColor: '#E5E7EB' }} />
              <p
                className="text-base md:text-lg leading-relaxed mb-10 max-w-lg text-center md:text-right"
                style={{ color: '#64748B', fontWeight: 300 }}
              >
                {hero.body}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="text-sm font-medium px-8 py-3.5 text-white transition-all duration-300"
                  style={{ backgroundColor: '#0F172A' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
                >
                  {hero.cta1}
                </Link>
                <Link
                  to="/practice"
                  className="text-sm font-medium px-8 py-3.5 transition-all duration-300"
                  style={{ border: '1px solid #0F172A', color: '#0F172A' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0F172A'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0F172A'; }}
                >
                  {hero.cta2}
                </Link>
              </div>
              <div
                className="flex items-center justify-center md:justify-start flex-wrap gap-4 md:gap-6 mt-12 pt-8 w-full"
                style={{ borderTop: '1px solid #E5E7EB' }}
              >
                {['דיסקרטיות מלאה', 'יחס אישי', 'מקצועיות ויסודיות'].map((t, i, arr) => (
                  <div key={t} className="flex items-center gap-4 md:gap-6">
                    <span className="text-xs" style={{ color: '#64748B' }}>{t}</span>
                    {i < arr.length - 1 && <div className="w-px h-6 hidden sm:block" style={{ backgroundColor: '#E5E7EB' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full" style={{ border: '1px solid #E5E7EB', zIndex: 0 }} />
                <div className="relative z-10 overflow-hidden" style={{ maxWidth: 440 }}>
                  <img
                    src="/assets/portrait.jpg"
                    alt="שירה קופמן - עורכת דין, מגשרת ונוטריון"
                    className="w-full h-auto object-cover object-top"
                    style={{ maxHeight: '580px', filter: 'brightness(0.97) contrast(1.02)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
            {values.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start p-8 group transition-all duration-300"
                style={{ backgroundColor: '#0F172A' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
              >
                <div className="w-8 h-px mb-5 transition-all duration-300 group-hover:w-12" style={{ backgroundColor: '#516A73' }} />
                <h3 className="text-white text-base font-medium mb-2 text-center md:text-right">{item.title}</h3>
                <p className="text-sm leading-relaxed font-light text-center md:text-right" style={{ color: '#FFFFFF' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRACTICE TEASER ─── */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end items-center justify-between gap-6 mb-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>שירותים</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light leading-snug text-center md:text-right" style={{ color: '#0F172A', letterSpacing: '-0.3px' }}>
                תחומי עיסוק
              </h2>
            </div>
            <Link
              to="/practice"
              className="text-sm font-medium flex items-center gap-2 transition-colors duration-200"
              style={{ color: '#516A73' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#516A73')}
            >
              לכל תחומי העיסוק <span>←</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border" style={{ borderColor: '#E5E7EB' }}>
            {practiceAreas.slice(0, 4).map((area, i) => (
              <div
                key={i}
                className="group p-7 border-b border-l transition-all duration-300 flex flex-col items-center md:items-start"
                style={{ borderColor: '#E5E7EB' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F7F5F1')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
              >
                <div className="w-6 h-px mb-5 transition-all duration-300 group-hover:w-10" style={{ backgroundColor: '#516A73' }} />
                <h3 className="text-base font-semibold mb-3 text-center md:text-right" style={{ color: '#0F172A' }}>{area.title}</h3>
                <p className="text-sm leading-relaxed font-light text-center md:text-right" style={{ color: '#64748B' }}>{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>תהליך העבודה</span>
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug" style={{ color: '#0F172A', letterSpacing: '-0.3px' }}>
              איך מתבצע התהליך?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center md:items-start group">
                <div
                  className="flex items-center justify-center w-12 h-12 mb-6 text-sm font-medium transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: '#0F172A', color: '#FFFFFF', borderRadius: '50%' }}
                >
                  {step.number}
                </div>
                <h3 className="text-base font-semibold mb-3 text-center md:text-right" style={{ color: '#0F172A' }}>{step.title}</h3>
                <div className="h-px w-8 mb-3 transition-all duration-300 group-hover:w-12" style={{ backgroundColor: '#516A73' }} />
                <p className="text-sm leading-relaxed font-light text-center md:text-right" style={{ color: '#64748B' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-base font-light mb-8" style={{ color: '#94a3b8' }}>
            פנו אלינו לתיאום פגישת ייעוץ ראשונית
          </p>
          <Link
            to="/contact"
            className="inline-block text-sm font-medium px-10 py-4 transition-all duration-300"
            style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#516A73'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#0F172A'; }}
          >
            לתיאום פגישה
          </Link>
        </div>
      </section>
    </>
  );
}

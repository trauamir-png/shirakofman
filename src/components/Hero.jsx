import { hero, siteConfig } from '../data/content';

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: '#FFFFFF', paddingTop: '170px' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(81,106,115,0.04) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(15,23,42,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Text — RTL: text on right side first in markup */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: '#516A73' }}
              >
                {siteConfig.name} &nbsp;|&nbsp; {siteConfig.title}
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug mb-6"
              style={{ color: '#0F172A', letterSpacing: '-0.5px' }}
            >
              {hero.headline}
              <br />
              <span className="font-medium">{hero.headlineSub}</span>
            </h1>

            {/* Thin divider */}
            <div className="h-px w-16 mb-6" style={{ backgroundColor: '#E5E7EB' }} />

            {/* Body */}
            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#64748B', fontWeight: 300 }}
            >
              {hero.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-sm font-medium px-8 py-3.5 text-white transition-all duration-300"
                style={{ backgroundColor: '#0F172A' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
              >
                {hero.cta1}
              </a>
              <a
                href="#practice"
                onClick={(e) => handleScroll(e, '#practice')}
                className="text-sm font-medium px-8 py-3.5 transition-all duration-300"
                style={{
                  border: '1px solid #0F172A',
                  color: '#0F172A',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F172A';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#0F172A';
                }}
              >
                {hero.cta2}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-12 pt-8" style={{ borderTop: '1px solid #E5E7EB' }}>
              <div className="text-center">
                <div className="text-xs" style={{ color: '#64748B' }}>דיסקרטיות מלאה</div>
              </div>
              <div className="w-px h-6" style={{ backgroundColor: '#E5E7EB' }} />
              <div className="text-center">
                <div className="text-xs" style={{ color: '#64748B' }}>יחס אישי</div>
              </div>
              <div className="w-px h-6" style={{ backgroundColor: '#E5E7EB' }} />
              <div className="text-center">
                <div className="text-xs" style={{ color: '#64748B' }}>מקצועיות ויסודיות</div>
              </div>
            </div>
          </div>

          {/* Portrait — left side visually (right in DOM for RTL) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full"
                style={{ border: '1px solid #E5E7EB', zIndex: 0 }}
              />
              <div className="relative z-10 overflow-hidden" style={{ maxWidth: 440 }}>
                <img
                  src="/assets/portrait.jpg"
                  alt="שירה קופמן — עורכת דין, מגשרת ונוטריון"
                  className="w-full h-auto object-cover object-top"
                  style={{
                    maxHeight: '580px',
                    filter: 'brightness(0.97) contrast(1.02)',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.minHeight = '400px';
                    e.currentTarget.parentElement.style.backgroundColor = '#F7F5F1';
                    e.currentTarget.parentElement.style.display = 'flex';
                    e.currentTarget.parentElement.style.alignItems = 'center';
                    e.currentTarget.parentElement.style.justifyContent = 'center';
                    const placeholder = document.createElement('p');
                    placeholder.textContent = 'תמונת דיוקן תתווסף כאן';
                    placeholder.style.cssText = 'color: #64748B; font-size: 14px; text-align: center; padding: 2rem;';
                    e.currentTarget.parentElement.appendChild(placeholder);
                  }}
                />
              </div>
              {/* Name badge */}
              <div
                className="absolute bottom-8 right-0 px-5 py-3 z-20"
                style={{ backgroundColor: 'rgba(15,23,42,0.9)' }}
              >
                <p className="text-white text-sm font-medium">{siteConfig.name}</p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>{siteConfig.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10" style={{ backgroundColor: '#0F172A' }} />
        <span className="text-xs" style={{ color: '#0F172A' }}>גלול</span>
      </div>
    </section>
  );
}

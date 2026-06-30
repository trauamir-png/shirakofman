import { notary } from '../data/content';

export default function Notary() {
  return (
    <section id="notary" style={{ backgroundColor: '#F7F5F1' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
                נוטריון
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-light mb-6 leading-snug"
              style={{ color: '#0F172A', letterSpacing: '-0.3px' }}
            >
              {notary.title}
            </h2>

            <div className="h-px w-12 mb-8" style={{ backgroundColor: '#E5E7EB' }} />

            <p
              className="text-base md:text-lg leading-relaxed font-light mb-10"
              style={{ color: '#374151' }}
            >
              {notary.body}
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block text-sm font-medium px-8 py-3.5 transition-all duration-300"
              style={{
                border: '1px solid #0F172A',
                color: '#0F172A',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0F172A';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#0F172A';
              }}
            >
              לפרטים נוספים
            </a>
          </div>

          {/* Services list */}
          <div>
            <div
              className="p-8"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
            >
              <h3 className="text-base font-semibold mb-6" style={{ color: '#0F172A' }}>
                שירותים נוטריוניים
              </h3>
              <ul className="space-y-4">
                {notary.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#516A73' }}
                    />
                    <span className="text-sm font-light" style={{ color: '#374151' }}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <div
                className="mt-8 pt-6 text-xs font-light"
                style={{
                  borderTop: '1px solid #E5E7EB',
                  color: '#94a3b8',
                }}
              >
                * {notary.note}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="mt-4 p-6 flex items-center justify-between"
              style={{ backgroundColor: '#0F172A' }}
            >
              <div>
                <p className="text-white text-sm font-medium mb-0.5">נדרש שירות נוטריוני?</p>
                <p className="text-xs font-light" style={{ color: '#64748B' }}>
                  ניתן לתאם פגישה בהתראה קצרה
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-medium px-5 py-2.5 transition-all duration-300 flex-shrink-0"
                style={{ backgroundColor: '#516A73', color: '#FFFFFF' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3d5059')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
              >
                צרו קשר
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

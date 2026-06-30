import { about } from '../data/content';

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#F7F5F1' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24"
                style={{ border: '1px solid #E5E7EB' }}
              />
              <div
                className="relative overflow-hidden"
                style={{ backgroundColor: '#E5E7EB', aspectRatio: '4/5', maxWidth: 420 }}
              >
                <img
                  src="/assets/portrait.jpg"
                  alt="שירה קופמן — עורכת דין ומגשרת"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'saturate(0.9)' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.display = 'flex';
                    e.currentTarget.parentElement.style.alignItems = 'center';
                    e.currentTarget.parentElement.style.justifyContent = 'center';
                    const ph = document.createElement('p');
                    ph.textContent = 'תמונה תתווסף כאן';
                    ph.style.cssText = 'color:#64748B; font-size:14px;';
                    e.currentTarget.parentElement.appendChild(ph);
                  }}
                />
              </div>
              {/* Accent line */}
              <div
                className="absolute -bottom-4 right-8 left-0 h-px"
                style={{ backgroundColor: '#516A73' }}
              />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
                אודות
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-light mb-6 leading-snug"
              style={{ color: '#0F172A', letterSpacing: '-0.3px' }}
            >
              {about.title}
            </h2>

            <div className="h-px w-12 mb-8" style={{ backgroundColor: '#E5E7EB' }} />

            <div className="space-y-5">
              {about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg leading-relaxed font-light"
                  style={{ color: '#374151' }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Credentials block */}
            <div
              className="mt-10 p-6 border-r-2"
              style={{
                backgroundColor: '#ffffff',
                borderRightColor: '#516A73',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-light mb-1" style={{ color: '#0F172A' }}>עו״ד</div>
                  <div className="text-xs" style={{ color: '#64748B' }}>עורכת דין</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1" style={{ color: '#0F172A' }}>מגשרת</div>
                  <div className="text-xs" style={{ color: '#64748B' }}>מוסמכת</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1" style={{ color: '#0F172A' }}>נוטריון</div>
                  <div className="text-xs" style={{ color: '#64748B' }}>מורשה</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

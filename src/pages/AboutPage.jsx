import { Link } from 'react-router-dom';
import { about } from '../data/content';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '170px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#FFFFFF' }}>אודות</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.5px' }}>
            {about.title}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <section style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24" style={{ border: '1px solid #E5E7EB' }} />
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', maxWidth: 460 }}>
                <img
                  src="/assets/portrait.jpg"
                  alt="שירה קופמן - עורכת דין ומגשרת"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'saturate(0.9)' }}
                />
              </div>
              <div className="absolute -bottom-4 right-8 left-0 h-px" style={{ backgroundColor: '#516A73' }} />
            </div>

            {/* Text */}
            <div className="pt-4">
              <div className="space-y-6 mb-10">
                {about.paragraphs.map((para, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed font-light" style={{ color: '#374151' }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Credentials */}
              <div className="p-6 border-r-2 mb-10" style={{ backgroundColor: '#fff', borderRightColor: '#516A73' }}>
                <div className="grid grid-cols-3 gap-6 text-center">
                  {[
                    { title: 'עו״ד', sub: 'עורכת דין' },
                    { title: 'מגשרת', sub: 'מוסמכת' },
                    { title: 'נוטריון', sub: 'מורשה' },
                  ].map((c) => (
                    <div key={c.title}>
                      <div className="text-2xl font-light mb-1" style={{ color: '#0F172A' }}>{c.title}</div>
                      <div className="text-xs" style={{ color: '#64748B' }}>{c.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block text-sm font-medium px-8 py-3.5 text-white transition-all duration-300"
                style={{ backgroundColor: '#0F172A' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
              >
                לתיאום פגישה
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

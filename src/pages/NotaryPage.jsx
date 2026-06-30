import { Link } from 'react-router-dom';
import { notary } from '../data/content';

export default function NotaryPage() {
  return (
    <div style={{ paddingTop: '170px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#FFFFFF' }}>נוטריון</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.5px' }}>
            {notary.title}
          </h1>
        </div>
      </div>

      {/* Main */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-base md:text-xl leading-relaxed font-light mb-10" style={{ color: '#374151' }}>
                {notary.body}
              </p>
              <p className="text-base leading-relaxed font-light mb-10" style={{ color: '#374151' }}>
                שירותים נוטריוניים מצריכים דיוק ומקצועיות גבוהה. המשרד מציע זמינות ושירות אישי לכל פנייה.
              </p>
              <Link
                to="/contact"
                className="inline-block text-sm font-medium px-8 py-3.5 text-white transition-all duration-300"
                style={{ backgroundColor: '#0F172A' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
              >
                לתיאום תור
              </Link>
            </div>

            <div>
              <div className="p-8 mb-4" style={{ backgroundColor: '#F7F5F1', border: '1px solid #E5E7EB' }}>
                <h3 className="text-base font-semibold mb-6" style={{ color: '#0F172A' }}>שירותים נוטריוניים</h3>
                <ul className="space-y-4">
                  {notary.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#516A73' }} />
                      <span className="text-sm font-light" style={{ color: '#374151' }}>{service}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 pt-6 text-xs font-light" style={{ borderTop: '1px solid #E5E7EB', color: '#94a3b8' }}>
                  * {notary.note}
                </p>
              </div>

              <div className="p-6 flex items-center justify-between" style={{ backgroundColor: '#0F172A' }}>
                <div>
                  <p className="text-white text-sm font-medium mb-0.5">נדרש שירות נוטריוני?</p>
                  <p className="text-xs font-light" style={{ color: '#64748B' }}>ניתן לתאם פגישה בהתראה קצרה</p>
                </div>
                <Link
                  to="/contact"
                  className="text-xs font-medium px-5 py-2.5 flex-shrink-0 transition-all duration-300"
                  style={{ backgroundColor: '#516A73', color: '#FFFFFF' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3d5059')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
                >
                  צרו קשר
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

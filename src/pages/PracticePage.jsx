import { Link } from 'react-router-dom';
import { practiceAreas, whyChoose } from '../data/content';

export default function PracticePage() {
  return (
    <div style={{ paddingTop: '170px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#FFFFFF' }}>שירותים</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.5px' }}>
            תחומי עיסוק
          </h1>
        </div>
      </div>

      {/* All practice areas */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <p className="text-base font-light mb-12 max-w-2xl" style={{ color: '#64748B' }}>
            תחומי הפעילות שלהלן מייצגים את השירותים הנפוצים במשרד. לפרטים נוספים על שירות ספציפי, אנא צרו קשר.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border" style={{ borderColor: '#E5E7EB' }}>
            {practiceAreas.map((area, i) => (
              <div
                key={i}
                className="group p-7 border-b border-l transition-all duration-300"
                style={{ borderColor: '#E5E7EB' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F7F5F1')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
              >
                <div className="w-6 h-px mb-5 transition-all duration-300 group-hover:w-10" style={{ backgroundColor: '#516A73' }} />
                <h3 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>{area.title}</h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: '#64748B' }}>{area.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-center" style={{ color: '#94a3b8' }}>
            רשימת תחומי העיסוק מובאת כמידע כללי בלבד ואינה מהווה ייצוג משפטי.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-light leading-snug" style={{ color: '#0F172A', letterSpacing: '-0.3px' }}>
              ליווי משפטי בגישה אישית ומדויקת
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="group p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(15,23,42,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="text-4xl font-thin mb-6" style={{ color: '#E5E7EB', fontFamily: 'Georgia, serif' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>{item.title}</h3>
                <div className="h-px w-8 mb-4" style={{ backgroundColor: '#516A73' }} />
                <p className="text-sm leading-relaxed font-light" style={{ color: '#64748B' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 text-center">
          <h2 className="text-2xl font-light text-white mb-4">יש לכם שאלה על אחד מתחומי העיסוק?</h2>
          <p className="text-base font-light mb-8" style={{ color: '#94a3b8' }}>פנו אלינו ונשמח לסייע</p>
          <Link to="/contact" className="inline-block text-sm font-medium px-10 py-4 transition-all duration-300"
            style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#516A73'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#0F172A'; }}
          >
            לתיאום פגישה
          </Link>
        </div>
      </section>
    </div>
  );
}

import { mediation, siteConfig } from '../data/content';

export default function Mediation() {
  return (
    <section id="mediation" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
                גישור
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-light mb-6 leading-snug"
              style={{ color: '#FFFFFF', letterSpacing: '-0.3px' }}
            >
              {mediation.title}
            </h2>

            <div className="h-px w-12 mb-8" style={{ backgroundColor: '#516A73' }} />

            <p
              className="text-base md:text-lg leading-relaxed font-light mb-10"
              style={{ color: '#94a3b8' }}
            >
              {mediation.body}
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block text-sm font-medium px-8 py-3.5 transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#516A73';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0F172A';
              }}
            >
              {mediation.cta}
            </a>
          </div>

          {/* Visual side */}
          <div className="flex flex-col gap-6">
            {[
              { title: 'דיסקרטיות', body: 'ההליך מתנהל בסודיות מלאה, מחוץ לכותלי בית המשפט.' },
              { title: 'יעילות', body: 'הגעה להסכמות בזמן קצר יותר ובעלות נמוכה יותר מהתדיינות משפטית.' },
              { title: 'שמירה על יחסים', body: 'תקשורת מכבדת המאפשרת המשך מערכת יחסים תקינה.' },
              { title: 'שליטה בתוצאה', body: 'הצדדים הם שקובעים את ההסכמה, לא שופט.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 transition-all duration-300 group"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-1 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: '#516A73', minHeight: 40 }}
                />
                <div>
                  <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm font-light" style={{ color: '#94a3b8' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

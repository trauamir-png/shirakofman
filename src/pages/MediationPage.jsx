import { Link } from 'react-router-dom';
import { mediation } from '../data/content';

const mediationBenefits = [
  { title: 'דיסקרטיות', body: 'ההליך מתנהל בסודיות מלאה, מחוץ לכותלי בית המשפט.' },
  { title: 'יעילות', body: 'הגעה להסכמות בזמן קצר יותר ובעלות נמוכה יותר מהתדיינות משפטית.' },
  { title: 'שמירה על יחסים', body: 'תקשורת מכבדת המאפשרת המשך מערכת יחסים תקינה.' },
  { title: 'שליטה בתוצאה', body: 'הצדדים הם שקובעים את ההסכמה, לא שופט.' },
  { title: 'גמישות', body: 'ניתן לקיים גישור גם מרחוק, בשעות מותאמות לצדדים.' },
  { title: 'ודאות', body: 'הסכם שנחתם בגישור מחייב משפטית ומעניק ודאות לצדדים.' },
];

export default function MediationPage() {
  return (
    <div style={{ paddingTop: '170px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#FFFFFF' }}>גישור</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.5px' }}>
            {mediation.title}
          </h1>
        </div>
      </div>

      {/* Main */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-base md:text-xl leading-relaxed font-light mb-10" style={{ color: '#374151' }}>
                {mediation.body}
              </p>
              <Link
                to="/contact"
                className="inline-block text-sm font-medium px-8 py-3.5 text-white transition-all duration-300"
                style={{ backgroundColor: '#0F172A' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
              >
                {mediation.cta}
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              {mediationBenefits.map((item, i) => (
                <div key={i} className="flex gap-5 p-5 transition-all duration-300" style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: '#516A73', minHeight: 40 }} />
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: '#0F172A' }}>{item.title}</h4>
                    <p className="text-sm font-light" style={{ color: '#64748B' }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is mediation */}
      <section style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#0F172A' }}>
              מה ההבדל בין גישור להליך משפטי?
            </h2>
            <div className="h-px w-12 mx-auto mb-10" style={{ backgroundColor: '#516A73' }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              {[
                { title: 'גישור', points: ['וולונטרי ומוסכם', 'הצדדים שולטים בתוצאה', 'דיסקרטי ומהיר', 'עלות נמוכה יותר', 'שומר על יחסים'] },
                { title: 'הליך משפטי', points: ['מחייב בפסיקת שופט', 'השופט קובע את התוצאה', 'פומבי ואורך זמן', 'עלות גבוהה יותר', 'עלול לפגוע ביחסים'] },
              ].map((col) => (
                <div key={col.title} className="p-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                  <h3 className="text-base font-semibold mb-4" style={{ color: '#0F172A' }}>{col.title}</h3>
                  <ul className="space-y-2">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-light" style={{ color: '#374151' }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#516A73' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

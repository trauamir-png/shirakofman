import { practiceAreas } from '../data/content';

export default function PracticeAreas() {
  return (
    <section id="practice" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
              שירותים
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-light mb-4 leading-snug"
            style={{ color: '#0F172A', letterSpacing: '-0.3px' }}
          >
            תחומי עיסוק
          </h2>
          <p className="text-base leading-relaxed font-light" style={{ color: '#64748B' }}>
            תחומי הפעילות שלהלן מייצגים את השירותים הנפוצים במשרד. לפרטים נוספים על שירות ספציפי, אנא צרו קשר.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-light" style={{ borderColor: '#E5E7EB' }}>
          {practiceAreas.map((area, i) => (
            <div
              key={i}
              className="group p-7 border-b border-l transition-all duration-300 cursor-default"
              style={{
                borderColor: '#E5E7EB',
                backgroundColor: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7F5F1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              <div
                className="w-6 h-px mb-5 transition-all duration-300 group-hover:w-10"
                style={{ backgroundColor: '#516A73' }}
              />
              <h3
                className="text-base font-semibold mb-3"
                style={{ color: '#0F172A' }}
              >
                {area.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-light"
                style={{ color: '#64748B' }}
              >
                {area.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-xs text-center" style={{ color: '#94a3b8' }}>
          רשימת תחומי העיסוק מובאת כמידע כללי בלבד ואינה מהווה ייצוג משפטי.
        </p>
      </div>
    </section>
  );
}

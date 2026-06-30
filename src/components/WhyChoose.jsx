import { whyChoose } from '../data/content';

export default function WhyChoose() {
  return (
    <section style={{ backgroundColor: '#F7F5F1' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
              הגישה שלנו
            </span>
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-light leading-snug"
            style={{ color: '#0F172A', letterSpacing: '-0.3px' }}
          >
            ליווי משפטי בגישה אישית ומדויקת
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="group p-8 transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(15,23,42,0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Number */}
              <div
                className="text-4xl font-thin mb-6 leading-none"
                style={{ color: '#E5E7EB', fontFamily: 'Georgia, serif' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>
                {item.title}
              </h3>
              <div className="h-px w-8 mb-4" style={{ backgroundColor: '#516A73' }} />
              <p className="text-sm leading-relaxed font-light" style={{ color: '#64748B' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

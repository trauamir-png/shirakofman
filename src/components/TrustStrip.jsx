import { values } from '../data/content';

export default function TrustStrip() {
  return (
    <section style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          {values.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start p-8 transition-all duration-300 group"
              style={{ backgroundColor: '#0F172A' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
            >
              <div
                className="w-8 h-px mb-5 transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: '#516A73' }}
              />
              <h3 className="text-white text-base font-medium mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#94a3b8' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

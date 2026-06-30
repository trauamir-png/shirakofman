import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
              תהליך העבודה
            </span>
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-light leading-snug"
            style={{ color: '#0F172A', letterSpacing: '-0.3px' }}
          >
            איך מתבצע התהליך?
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-12 right-0 left-0 h-px"
            style={{ backgroundColor: '#E5E7EB', zIndex: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-start group">
                {/* Number circle */}
                <div
                  className="flex items-center justify-center w-12 h-12 mb-6 text-sm font-medium transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                  }}
                >
                  {step.number}
                </div>

                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: '#0F172A' }}
                >
                  {step.title}
                </h3>
                <div
                  className="h-px w-8 mb-3 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: '#516A73' }}
                />
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: '#64748B' }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

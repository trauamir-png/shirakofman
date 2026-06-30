import { useState } from 'react';
import { faq } from '../data/content';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border-b"
      style={{ borderColor: '#E5E7EB' }}
    >
      <button
        className="w-full flex items-center justify-between py-5 gap-4 text-right focus:outline-none"
        onClick={onToggle}
      >
        <span
          className="text-base font-medium text-right"
          style={{ color: isOpen ? '#516A73' : '#0F172A' }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            backgroundColor: isOpen ? '#0F172A' : '#F7F5F1',
            color: isOpen ? '#FFFFFF' : '#0F172A',
          }}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-350"
        style={{
          maxHeight: isOpen ? '400px' : '0',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p
          className="pb-5 text-sm leading-relaxed font-light"
          style={{ color: '#374151' }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={{ backgroundColor: '#F7F5F1' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
                שאלות ותשובות
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-light mb-6 leading-snug"
              style={{ color: '#0F172A', letterSpacing: '-0.3px' }}
            >
              שאלות נפוצות
            </h2>
            <p
              className="text-base leading-relaxed font-light mb-8"
              style={{ color: '#64748B' }}
            >
              אם לא מצאתם תשובה לשאלתכם, אתם מוזמנים לפנות אלינו ישירות.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block text-sm font-medium px-7 py-3 transition-all duration-300"
              style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516A73')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
            >
              שלחו לנו שאלה
            </a>
          </div>

          {/* Right: accordion */}
          <div>
            {faq.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

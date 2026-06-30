import { articles, faq } from '../data/content';
import { useState } from 'react';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button className="w-full flex items-center justify-between py-5 gap-4 text-right focus:outline-none" onClick={onToggle}>
        <span className="text-base font-medium" style={{ color: isOpen ? '#516A73' : '#0F172A' }}>{question}</span>
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300"
          style={{ backgroundColor: isOpen ? '#0F172A' : '#F7F5F1', color: isOpen ? '#FFFFFF' : '#0F172A' }}>
          <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <p className="pb-5 text-sm leading-relaxed font-light" style={{ color: '#374151' }}>{answer}</p>
      </div>
    </div>
  );
}

export default function ArticlesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ paddingTop: '170px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>ידע ומידע</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.5px' }}>
            מאמרים ומידע מקצועי
          </h1>
        </div>
      </div>

      {/* Articles */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((article, i) => (
              <article key={i} className="group flex flex-col" style={{ borderBottom: '2px solid #E5E7EB' }}>
                <div className="mb-5 h-1.5 w-12 transition-all duration-300 group-hover:w-20" style={{ backgroundColor: '#516A73' }} />
                <span className="text-xs mb-3" style={{ color: '#94a3b8' }}>{article.date}</span>
                <h3 className="text-lg font-medium mb-3 leading-snug" style={{ color: '#0F172A' }}>{article.title}</h3>
                <p className="text-sm leading-relaxed font-light flex-grow mb-5" style={{ color: '#64748B' }}>{article.excerpt}</p>
                <a href={article.href} className="text-sm font-medium pb-5 flex items-center gap-2 transition-colors duration-200" style={{ color: '#0F172A' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#516A73')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
                >
                  קרא עוד <span>←</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F7F5F1' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>שאלות ותשובות</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-snug" style={{ color: '#0F172A', letterSpacing: '-0.3px' }}>
                שאלות נפוצות
              </h2>
              <p className="text-base leading-relaxed font-light" style={{ color: '#64748B' }}>
                אם לא מצאתם תשובה לשאלתכם, אתם מוזמנים לפנות אלינו ישירות.
              </p>
            </div>
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
    </div>
  );
}

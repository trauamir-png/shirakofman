import { articles } from '../data/content';

export default function Articles() {
  return (
    <section id="articles" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#516A73' }}>
                ידע ומידע
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-light leading-snug"
              style={{ color: '#0F172A', letterSpacing: '-0.3px' }}
            >
              מאמרים ומידע מקצועי
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium flex items-center gap-2 transition-colors duration-200"
            style={{ color: '#516A73' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#516A73')}
          >
            לכל המאמרים
            <span className="text-base">←</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group flex flex-col"
              style={{ borderBottom: '2px solid #E5E7EB' }}
            >
              {/* Top image area / category */}
              <div
                className="mb-5 h-1.5 w-12 transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: '#516A73' }}
              />

              {/* Meta */}
              <span className="text-xs mb-3" style={{ color: '#94a3b8' }}>
                {article.date}
              </span>

              {/* Title */}
              <h3
                className="text-lg font-medium mb-3 leading-snug transition-colors duration-200 group-hover:text-blue-gray"
                style={{ color: '#0F172A' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#516A73')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p
                className="text-sm leading-relaxed font-light flex-grow mb-5"
                style={{ color: '#64748B' }}
              >
                {article.excerpt}
              </p>

              {/* Read more */}
              <a
                href={article.href}
                className="text-sm font-medium pb-5 flex items-center gap-2 transition-colors duration-200"
                style={{ color: '#0F172A' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#516A73')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
              >
                קרא עוד
                <span>←</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

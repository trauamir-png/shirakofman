import { useState } from 'react';
import { siteConfig, contactFields, disclaimer } from '../data/content';

// פניות מהטופס נשלחות ל-amirtrau1@gmail.com דרך Formspree
const FORMSPREE_ID = 'xojonwaw';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ paddingTop: '170px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#FFFFFF' }}>צרו קשר</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.5px' }}>
            לתיאום פגישה
            <br />
            <span className="font-medium">או השארת פרטים</span>
          </h1>
        </div>
      </div>

      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-base font-light mb-10" style={{ color: '#64748B' }}>
                נשמח לשמוע מכם. ניתן לפנות אלינו בכל אחת מהדרכים הבאות, ונחזור אליכם בהקדם.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { label: 'טלפון', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/-/g, '')}`,
                    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
                  { label: 'אימייל', value: siteConfig.email, href: `mailto:${siteConfig.email}`,
                    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                  { label: 'כתובת', value: siteConfig.address, href: null,
                    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center" style={{ backgroundColor: '#F7F5F1', color: '#516A73' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: '#94a3b8' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="text-sm font-medium transition-colors duration-200" style={{ color: '#0F172A' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#516A73')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}>{item.value}</a>
                        : <span className="text-sm font-medium" style={{ color: '#0F172A' }}>{item.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-300"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                שלחו הודעה ב-WhatsApp
              </a>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center" style={{ backgroundColor: '#F7F5F1' }}>
                  <div className="w-12 h-12 flex items-center justify-center mb-4" style={{ backgroundColor: '#0F172A' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2" style={{ color: '#0F172A' }}>הפנייה נשלחה בהצלחה</h3>
                  <p className="text-sm font-light" style={{ color: '#64748B' }}>נחזור אליכם בהקדם האפשרי.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {contactFields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-xs font-medium mb-1.5" style={{ color: '#374151' }}>
                        {field.label}{field.required && <span style={{ color: '#516A73' }}> *</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea id={field.name} name={field.name} rows={4} value={formData[field.name]} onChange={handleChange}
                          className="w-full px-4 py-3 text-sm font-light resize-none focus:outline-none transition-colors duration-200"
                          style={{ border: '1px solid #E5E7EB', color: '#111827', backgroundColor: '#FAFAFA' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#516A73')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
                        />
                      ) : (
                        <input id={field.name} type={field.type} name={field.name} required={field.required}
                          value={formData[field.name]} onChange={handleChange}
                          className="w-full px-4 py-3 text-sm font-light focus:outline-none transition-colors duration-200"
                          style={{ border: '1px solid #E5E7EB', color: '#111827', backgroundColor: '#FAFAFA' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#516A73')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
                        />
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 text-sm font-medium text-white transition-all duration-300"
                    style={{ backgroundColor: sending ? '#516A73' : '#0F172A', cursor: sending ? 'wait' : 'pointer' }}
                    onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = '#516A73'; }}
                    onMouseLeave={(e) => { if (!sending) e.currentTarget.style.backgroundColor = '#0F172A'; }}
                  >
                    {sending ? 'שולח...' : 'שליחה'}
                  </button>
                  {error && (
                    <p className="text-sm text-center" style={{ color: '#ef4444' }}>
                      שגיאה בשליחה. נסו שוב או פנו אלינו ישירות בטלפון.
                    </p>
                  )}
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#94a3b8' }}>{disclaimer}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

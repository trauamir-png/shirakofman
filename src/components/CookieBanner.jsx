import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(
    () => localStorage.getItem('cookies-accepted') === 'true'
  );

  if (accepted) return null;

  const accept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setAccepted(true);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-5 md:px-10 py-4"
      style={{ backgroundColor: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-light text-center sm:text-right" style={{ color: '#CBD5E1' }}>
          אתר זה משתמש בקובצי עוגיות לשיפור חוויית הגלישה.{' '}
          <Link
            to="/privacy-policy"
            className="underline underline-offset-2 transition-colors duration-200"
            style={{ color: '#94a3b8' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            למדיניות הפרטיות
          </Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 text-sm font-medium px-6 py-2.5 transition-all duration-300"
          style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#516A73'; e.currentTarget.style.color = '#FFFFFF'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#0F172A'; }}
        >
          אני מסכים/ה
        </button>
      </div>
    </div>
  );
}

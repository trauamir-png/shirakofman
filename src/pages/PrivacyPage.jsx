export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: '170px' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: '#516A73' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#FFFFFF' }}>משפטי</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.5px' }}>
            מדיניות פרטיות
          </h1>
        </div>
      </div>

      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="space-y-10 text-sm leading-relaxed font-light" style={{ color: '#374151' }}>

            <div>
              <p style={{ color: '#64748B' }}>עדכון אחרון: יוני 2025</p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>1. כללי</h2>
              <p>
                משרד עורכת הדין שירה קופמן (להלן: "המשרד") מכבד את פרטיות המשתמשים באתר ומחויב לשמור על המידע האישי שנמסר לו. מדיניות פרטיות זו מסבירה אילו נתונים נאספים, כיצד הם מעובדים ומאוחסנים, ומה זכויותיכם בנוגע אליהם.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>2. מידע הנאסף</h2>
              <p className="mb-3">האתר עשוי לאסוף את סוגי המידע הבאים:</p>
              <ul className="space-y-2 pr-4">
                {[
                  'פרטי יצירת קשר: שם, טלפון, כתובת אימייל - בעת מילוי טופס הפנייה.',
                  'פרטי הפנייה: נושא הפנייה והודעה חופשית שנמסרת מרצון.',
                  'נתוני גלישה: כתובת IP, סוג דפדפן, עמודים שנצפו - לצורך שיפור הביצועים.',
                  'קובצי עוגיות (Cookies): לפירוט ראו סעיף 6 להלן.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#516A73' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>3. מטרות עיבוד המידע</h2>
              <p className="mb-3">המידע הנאסף משמש אך ורק למטרות הבאות:</p>
              <ul className="space-y-2 pr-4">
                {[
                  'מתן מענה לפניות ובקשות שנשלחו דרך האתר.',
                  'תיאום פגישות ייעוץ.',
                  'שיפור חוויית המשתמש ותפקוד האתר.',
                  'עמידה בחובות חוקיות החלות על המשרד.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#516A73' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>4. שיתוף מידע עם צדדים שלישיים</h2>
              <p className="mb-3">
                המשרד אינו מוכר, מעביר או משתף את המידע האישי שלכם עם צדדים שלישיים לצורכי שיווק. עם זאת, האתר עושה שימוש בשירותים חיצוניים הבאים לצורך תפעולו:
              </p>
              <ul className="space-y-2 pr-4">
                {[
                  'Formspree - שירות לניהול טפסי יצירת קשר. הפנייה שתשלחו תועבר לשרתי Formspree לפני שתגיע למשרד.',
                  'Vercel - פלטפורמת אחסון האתר.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#516A73' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                ספקים אלה כפופים למדיניות הפרטיות שלהם ועומדים בתקנות הגנת מידע מחמירות.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>5. אבטחת מידע</h2>
              <p>
                המשרד נוקט באמצעי אבטחה סבירים להגנה על המידע שנמסר לו. עם זאת, יש לציין כי אין אבטחה מוחלטת בפעילות מקוונת, ואנו ממליצים שלא לשתף מידע רגיש מיוחד דרך טפסי האתר.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>6. קובצי עוגיות (Cookies)</h2>
              <p className="mb-3">
                האתר עושה שימוש בקובצי עוגיות - קבצים קטנים המאוחסנים בדפדפן שלכם - לצורך השיפור הכולל של חוויית השימוש. ניתן להגדיר את הדפדפן לחסום קובצי עוגיות, אך הדבר עלול לפגוע בחלק מהפונקציות של האתר.
              </p>
              <p>
                בכניסתכם לאתר ובלחיצה על "אני מסכים/ה" בבאנר הקוקיז, אתם מביעים הסכמתכם לשימוש בקובצי עוגיות כמפורט לעיל.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>7. זכויותיכם</h2>
              <p className="mb-3">בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, עומדות לכם הזכויות הבאות:</p>
              <ul className="space-y-2 pr-4">
                {[
                  'הזכות לעיין במידע המוחזק אודותיכם.',
                  'הזכות לתקן מידע שגוי.',
                  'הזכות לבקש מחיקת מידע, בכפוף לחובות חוקיות.',
                  'הזכות לבקש הגבלת עיבוד המידע.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#516A73' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                לממוש זכויותיכם, פנו אלינו בכתב לכתובת האימייל המפורטת בדף יצירת הקשר.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>8. שינויים במדיניות</h2>
              <p>
                המשרד שומר לעצמו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר. המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
              </p>
            </div>

            <div className="pt-6" style={{ borderTop: '1px solid #E5E7EB' }}>
              <h2 className="text-base font-semibold mb-3" style={{ color: '#0F172A' }}>צרו קשר</h2>
              <p>לכל שאלה בנוגע למדיניות פרטיות זו ניתן לפנות אלינו:</p>
              <p className="mt-2">
                <span style={{ color: '#516A73' }}>משרד עורכת הדין שירה קופמן</span>
                <br />האורגים 35, אשדוד
                <br />shirakofman.lawfirm@gmail.com
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

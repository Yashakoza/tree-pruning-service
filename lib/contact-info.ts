export const BUSINESS_CONFIG = {
  businessName: "גינון לדוגמה",
  businessShortName: "גינון לדוגמה",
  phoneDisplay: "052-555-1234",
  phoneTel: "+972525551234",
  whatsAppNumber: "972525551234",
  whatsAppMessage: "שלום, הגעתי דרך האתר ואשמח לקבל הצעת מחיר לגיזום עצים.",
  email: "",
  serviceArea: "גוש דן והמרכז",
  serviceAreaCities: [
    "תל אביב",
    "רמת גן",
    "גבעתיים",
    "פתח תקווה",
    "הוד השרון",
    "ראשון לציון",
    "הרצליה",
    "רעננה",
    "כפר סבא",
    "חולון",
  ],
  heroHeadline: "גיזום עצים מקצועי, בטוח ונקי — עד הבית",
  heroSubheadline:
    "גינון לדוגמה מספק שירותי גיזום, עיצוב ודילול עצים, הסרת ענפים מסוכנים, גיזום בגובה ותחזוקת עצים — לבתים פרטיים, בנייני מגורים ועסקים. עבודה מסודרת, בטוחה ועם פינוי גזם בסיום.",
  services: [
    {
      title: "גיזום עצים מקצועי",
      text: "גיזום מדויק לשמירה על בריאות העץ, מראה נקי ובטיחות הסביבה.",
    },
    {
      title: "עיצוב ודילול עצים",
      text: "פתיחת נוף העץ, הכנסת אור לגינה ושמירה על צורה טבעית ויפה.",
    },
    {
      title: "כריתת ענפים מסוכנים",
      text: "הסרת ענפים יבשים, כבדים או מסוכנים לפני שהם גורמים לנזק.",
    },
    {
      title: "גיזום בגובה",
      text: "עבודה מקצועית גם בעצים גבוהים ובמקומות מורכבים.",
    },
    {
      title: "גיזום לפני חורף",
      text: "הכנה לעונת רוחות וגשמים כדי להפחית סיכונים ולשמור על הסביבה.",
    },
    {
      title: "פינוי גזם",
      text: "השארת שטח נקי ומסודר בסיום העבודה.",
    },
    {
      title: "תחזוקת עצים שוטפת",
      text: "שירות קבוע לבתים פרטיים, בנייני מגורים, עסקים ושטחים ציבוריים.",
    },
  ],
  isDemo: true,
  demoDisclaimerText: "קונספט הדגמה פרטי — לא האתר הרשמי של העסק.",
  noindex: true,
  nofollow: true,
}

export const PHONE_DISPLAY = BUSINESS_CONFIG.phoneDisplay
export const PHONE_TEL = BUSINESS_CONFIG.phoneTel
export const WHATSAPP_NUMBER = BUSINESS_CONFIG.whatsAppNumber
export const WHATSAPP_MESSAGE = BUSINESS_CONFIG.whatsAppMessage

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const SERVICE_AREA = BUSINESS_CONFIG.serviceArea

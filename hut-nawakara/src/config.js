// ─── HUT Nawakara — branding & countdown config ────────────────────────────
// Everything editable lives here.

export const SITE = {
  company: 'PT Nawakara Perkasa Nusantara',
  shortName: 'Nawakara',
  event: 'HUT Nawakara',

  // SECURITY • SERVICE • INNOVATION
  tagline: ['Security', 'Service', 'Innovation'],

  // 9 November 1996 (month is 0-indexed: 10 = November)
  founded: { year: 1996, month: 10, day: 9 },
  foundedText: '9 November 1996',

  quote: ['Together We Secure', 'The Future'],
  hashtag: '#HUTNawakara',

  // Optional logo file: drop e.g. `logo.png` into `public/` and set logo: '/logo.png'.
  // Leave null to use the built-in gold monogram.
  logo: null,
}

/**
 * Next anniversary date, years being celebrated, and whether today IS the day.
 * Computed from SITE.founded so it rolls forward automatically every year.
 */
export function getAnniversary(now = new Date()) {
  const { year, month, day } = SITE.founded
  const isToday =
    now.getMonth() === month && now.getDate() === day

  const thisYear = new Date(now.getFullYear(), month, day, 0, 0, 0)
  const target =
    now < thisYear
      ? thisYear
      : new Date(now.getFullYear() + 1, month, day, 0, 0, 0)

  const years = (isToday ? thisYear.getFullYear() : target.getFullYear()) - year
  return { target, years, isToday }
}

/** Zero-padded days / hours / minutes / seconds remaining until `target`. */
export function getCountdown(now, target) {
  const diff = Math.max(0, target.getTime() - now.getTime())
  const total = Math.floor(diff / 1000)
  const pad = (n) => String(n).padStart(2, '0')
  return {
    days: pad(Math.floor(total / 86400)),
    hours: pad(Math.floor((total % 86400) / 3600)),
    minutes: pad(Math.floor((total % 3600) / 60)),
    seconds: pad(total % 60),
  }
}

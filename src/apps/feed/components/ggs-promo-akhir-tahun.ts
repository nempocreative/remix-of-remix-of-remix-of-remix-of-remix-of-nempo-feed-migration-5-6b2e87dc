/** GGS Feed slide 60: transparent year-end nail-art promo sticker (same sticker style as slide 53). */
export const GGS_PROMO_AKHIR_TAHUN_SLIDE = 60 as const;

export const GGS_PROMO_AKHIR_TAHUN = {
  kicker: 'PROMO',
  line: ['Nail Art', 'Motif Full'],
  punch: ['Persiapan Natal', '& Tahun Baru'],
  period: '18 November – 31 Desember 2026',
  prices: [
    { label: 'Kuku asli', was: '185.000', now: '135.000' },
    { label: 'Kuku palsu', was: '250.000', now: '195.000' },
  ],
} as const;

export const GGS_PROMO_AKHIR_TAHUN_TEXT = `${GGS_PROMO_AKHIR_TAHUN.kicker} ${[
  ...GGS_PROMO_AKHIR_TAHUN.line,
  ...GGS_PROMO_AKHIR_TAHUN.punch,
].join(' ')}. ${GGS_PROMO_AKHIR_TAHUN.prices
  .map((p) => `${p.label} Rp${p.was} jadi Rp${p.now}`)
  .join(', ')}. Berlaku ${GGS_PROMO_AKHIR_TAHUN.period}.`;

import { describe, expect, it } from 'vitest';
import { GGS_PROMO_AKHIR_TAHUN, GGS_PROMO_AKHIR_TAHUN_SLIDE, GGS_PROMO_AKHIR_TAHUN_TEXT } from './ggs-promo-akhir-tahun';

describe('GGS Feed slide 60 promo akhir tahun', () => {
  it('runs 18 November to 31 Desember 2026', () => {
    expect(GGS_PROMO_AKHIR_TAHUN.period).toBe('18 November – 31 Desember 2026');
  });

  it('drops kuku asli from 185.000 to 135.000', () => {
    const asli = GGS_PROMO_AKHIR_TAHUN.prices.find((p) => p.label === 'Kuku asli');
    expect(asli).toMatchObject({ was: '185.000', now: '135.000' });
  });

  it('drops kuku palsu from 250.000 to 195.000', () => {
    const palsu = GGS_PROMO_AKHIR_TAHUN.prices.find((p) => p.label === 'Kuku palsu');
    expect(palsu).toMatchObject({ was: '250.000', now: '195.000' });
  });

  it('mentions Natal and Tahun Baru', () => {
    expect(GGS_PROMO_AKHIR_TAHUN.punch.join(' ')).toBe('Persiapan Natal & Tahun Baru');
  });

  it('is slide 60, the last GGS feed slide', () => {
    expect(GGS_PROMO_AKHIR_TAHUN_SLIDE).toBe(60);
  });

  it('reads the full promo aloud', () => {
    expect(GGS_PROMO_AKHIR_TAHUN_TEXT).toBe(
      'PROMO Nail Art Motif Full Persiapan Natal & Tahun Baru. Kuku asli Rp185.000 jadi Rp135.000, Kuku palsu Rp250.000 jadi Rp195.000. Berlaku 18 November – 31 Desember 2026.',
    );
  });
});

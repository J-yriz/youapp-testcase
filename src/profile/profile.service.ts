import { Injectable } from '@nestjs/common';
import { Horoscope, Zodiac } from 'src/utility/types/profile';

@Injectable()
export class ProfileService {
  getHoroZod(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate(),
      month = date.getMonth() + 1,
      year = date.getFullYear();

    if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1912) throw new Error('Invalid date');

    const horoscopes: [number, number, Horoscope][] = [
      [3, 21, Horoscope.Aries],
      [4, 20, Horoscope.Taurus],
      [5, 21, Horoscope.Gemini],
      [6, 22, Horoscope.Cancer],
      [7, 23, Horoscope.Leo],
      [8, 23, Horoscope.Virgo],
      [9, 23, Horoscope.Libra],
      [10, 24, Horoscope.Scorpio],
      [11, 22, Horoscope.Sagittarius],
      [12, 22, Horoscope.Capricorn],
      [1, 20, Horoscope.Aquarius],
      [2, 19, Horoscope.Pisces],
    ];

    const horoscope =
      horoscopes.find(
        ([monthFind, dayFind]) =>
          (month === monthFind && day >= dayFind) || (month === (monthFind % 12) + 1 && day <= dayFind),
      )?.[2] || '';
    const zodiac = Object.values(Zodiac)[(year - 1912) % 12];

    return { horoscope, zodiac };
  }
}

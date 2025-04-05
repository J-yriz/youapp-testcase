import { Schema, Document } from 'mongoose';
import { Gender, Horoscope, Zodiac } from 'src/utility/types/profile';

export const ProfileSchema = new Schema(
  {
    about: {
      displayName: { type: String, required: false },
      image: { type: String, required: true },
      gender: { type: String, enum: Object.values(Gender), required: true },
      birthday: { type: Date, required: true },
      horoscope: { type: String, enum: Object.values(Horoscope), required: true },
      zodiac: { type: String, enum: Object.values(Zodiac), required: true },
      height: { type: Number, required: true },
      weight: { type: Number, required: true },
    },
    interest: { type: [String], required: false },
  },
  { _id: false },
);

export interface IProfileData {
  about?: {
    displayName?: string;
    image: string;
    gender: Gender;
    birthday: string;
    height: number;
    weight: number;
  };
  interest?: string[];
}

interface IZodiacProfile {
  horoscope: Horoscope;
  zodiac: Zodiac;
}

export interface IProfile extends Document, IProfileData, IZodiacProfile {}

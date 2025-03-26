// profile.schema.ts
import { Schema, Document } from 'mongoose';
import { Gender, Zodiac } from 'src/utility/types/profile';

export const ProfileSchema = new Schema(
  {
    about: {
      image: { type: String, required: false },
      gender: { type: String, enum: Object.values(Gender), required: false },
      birthday: { type: Date, required: false },
      horoscope: { type: String, required: false },
      zodiac: { type: String, enum: Object.values(Zodiac), required: false },
      height: { type: Number, required: false },
      weight: { type: Number, required: false },
    },
    interest: { type: [String], required: false },
  },
  { _id: false },
);

export interface ProfileData {
  about?: {
    image?: string;
    gender?: Gender;
    birthday?: Date;
    horoscope?: string;
    zodiac?: Zodiac;
    height?: number;
    weight?: number;
  };
  interest?: string[];
}

export interface Profile extends Document, ProfileData {}

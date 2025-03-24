import { Schema, Document } from 'mongoose';
import { Gender, Zodiac } from 'src/utility/types/profile';

const ProfileSchema = new Schema({
  image: { type: String, required: false },
  gender: { type: Gender, required: false },
  birthday: { type: Date, required: false },
  horoscope: { type: String, required: false },
  zodiac: { type: Zodiac, required: false },
  height: { type: Number, required: false },
  weight: { type: Number, required: false },
  interest: { type: [String], required: false },
});

export const AuthSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: ProfileSchema, required: false },
});

export interface Auth extends Document {
  username: string;
  email: string;
  password: string;
  profile: {
    image?: string;
    gender?: Gender;
    birthday?: Date;
    horoscope?: string;
    zodiac?: Zodiac;
    height?: number;
    weight?: number;
    interest?: string[];
  };
}

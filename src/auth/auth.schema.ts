import { Schema, Document } from 'mongoose';
import { IProfile, ProfileSchema } from 'src/profile/profile.schema';

export const AuthSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: { type: ProfileSchema, required: false },
  },
  { timestamps: true },
);

export interface IAuth extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  profile: IProfile;
}

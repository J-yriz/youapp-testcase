import { Schema, Document } from 'mongoose';

export const MessagesSchema = new Schema(
  {
    senderTag: { type: String, required: true },
    receiverTag: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export interface IMessages extends Document {
  senderTag: string;
  receiverTag: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

import { Injectable } from '@nestjs/common';
import { IMessages } from '../messages.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnDataMessages } from 'src/utility/types/message';

@Injectable()
export class SendMessageService {
  constructor(@InjectModel('messages') private messagesModel: Model<IMessages>) {}

  async sendMessage(senderTag: string, receiverTag: string, message: string): Promise<ReturnDataMessages> {
    return await new this.messagesModel({
      senderTag,
      receiverTag,
      message,
    }).save();
  }
}

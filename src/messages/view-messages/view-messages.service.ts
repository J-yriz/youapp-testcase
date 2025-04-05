import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMessages } from '../messages.schema';
import { ReturnDataMessages } from 'src/utility/types/message';

@Injectable()
export class ViewMessagesService {
  constructor(@InjectModel('messages') private messagesModel: Model<IMessages>) {}

  async viewMessages(senderTag: string, receiverTag: string): Promise<ReturnDataMessages[]> {
    return this.messagesModel
      .find({
        $or: [
          { senderTag, receiverTag },
          { senderTag: receiverTag, receiverTag: senderTag },
        ],
      })
      .sort({ createdAt: 1 })
      .exec();
  }
}

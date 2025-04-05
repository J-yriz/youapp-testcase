import { Module } from '@nestjs/common';
import { SendMessageService } from './send-message.service';
import { SendMessageController } from './send-message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesSchema } from '../messages.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'messages', schema: MessagesSchema }])],
  providers: [SendMessageService],
  controllers: [SendMessageController],
})
export class SendMessageModule {}

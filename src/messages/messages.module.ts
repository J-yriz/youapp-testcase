import { Module } from '@nestjs/common';
import { ViewMessagesModule } from './view-messages/view-messages.module';
import { SendMessageModule } from './send-message/send-message.module';

@Module({
  imports: [ViewMessagesModule, SendMessageModule],
})
export class MessagesModule {}

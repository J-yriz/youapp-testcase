import { Module } from '@nestjs/common';
import { ViewMessagesModule } from './view-messages/view-messages.module';
import { SendMessageModule } from './send-message/send-message.module';
import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';

@Module({
  imports: [ViewMessagesModule, SendMessageModule],
  providers: [MessagesGateway, MessagesService],
})
export class MessagesModule {}

import { Module } from '@nestjs/common';
import { ViewMessagesService } from './view-messages.service';
import { ViewMessagesController } from './view-messages.controller';

@Module({
  providers: [ViewMessagesService],
  controllers: [ViewMessagesController],
})
export class ViewMessagesModule {}

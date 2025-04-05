import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ViewMessagesService } from './view-messages.service';
import { ResponseStructure } from 'src/utility/class/reponseStructure';

@Controller('viewMessages')
export class ViewMessagesController {
  constructor(private readonly viewMessagesService: ViewMessagesService) {}

  @Post()
  async viewMessages(senderTag: string, receiverTag: string) {
    const messages = await this.viewMessagesService.viewMessages(senderTag, receiverTag);

    throw new HttpException(
      new ResponseStructure({
        statusCode: HttpStatus.OK,
        message: 'Messages retrieved successfully',
        data: messages.map((message) => ({
          senderTag: message?.senderTag,
          receiverTag: message?.receiverTag,
          message: message?.message,
          messageAt: message?.updatedAt,
        })),
        error: null,
      }),
      HttpStatus.OK,
    );
  }
}

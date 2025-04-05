import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { SendMessageService } from './send-message.service';
import { SendMessageDto } from '../dto/send-message';
import { ResponseStructure } from 'src/utility/class/reponseStructure';

@Controller('sendMessage')
export class SendMessageController {
  constructor(private readonly sendMessageService: SendMessageService) {}

  @Post()
  async sendMessage(@Body() sendMessageDto: SendMessageDto) {
    const { senderTag, receiverTag, message } = sendMessageDto;
    const messageData = await this.sendMessageService.sendMessage(senderTag, receiverTag, message);

    const response = messageData
      ? new ResponseStructure({
          statusCode: HttpStatus.CREATED,
          message: 'Message sent successfully',
          data: {
            senderTag: messageData.senderTag,
            receiverTag: messageData.receiverTag,
            message: messageData.message,
          },
          error: null,
        })
      : new ResponseStructure({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Bad request',
          data: {},
          error: 'Failed to send message',
        });

    throw new HttpException(response, response.statusCode);
  }
}

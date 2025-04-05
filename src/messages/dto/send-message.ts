import { IsNotEmpty, IsString } from 'class-validator';

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  senderTag: string;

  @IsString()
  @IsNotEmpty()
  receiverTag: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}

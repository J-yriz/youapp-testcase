import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(MessagesGateway.name);

  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  handleConnection() {}

  handleDisconnect(client: Socket) {
    const usersData = this.messagesService.getAllUsers();
    const userTag = Array.from(usersData.entries()).find(([_, socket]) => socket.id === client.id)?.[0];
    if (userTag) {
      this.messagesService.unregisterUser(userTag);
      this.logger.log(`Client disconnected: ${userTag}`);
    }
  }

  @SubscribeMessage('register')
  handleRegister(@ConnectedSocket() client: Socket, @MessageBody() userTag: string) {
    this.messagesService.registerUser(userTag, client);
    this.logger.log(`Client registered: ${userTag}`);
  }
}

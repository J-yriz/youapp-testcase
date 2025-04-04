import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class MessagesService {
  private users: Map<string, Socket> = new Map<string, Socket>();

  registerUser(userTag: string, socket: Socket) {
    this.users.set(userTag, socket);
  }

  unregisterUser(userTag: string) {
    this.users.delete(userTag);
  }

  getAllUsers() {
    return this.users;
  }

  getUserSocket(userTag: string) {
    return this.users.get(userTag);
  }
}

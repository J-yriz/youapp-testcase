import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): string {
    return 'Welcome to API YouApp!';
  }

  sliceWord(word: string, start: number, end: number) {
    if (start < 0 || end > word.length || start > end) throw new Error('Invalid start or end index');

    if (start === end) return '';
    if (start === 0 && end === word.length) return word

    return word.slice(start, end);
  }
}

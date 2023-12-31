import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user-interface';

@Injectable()
export class AppService {
  async getUsers(): Promise<User[]> {
    return [
      { id: 1, login: 'bob' },
      { id: 2, login: 'john' },
    ];
  }
}

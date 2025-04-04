import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { IAuth } from '../auth.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnDataAuth } from 'src/utility/types/auth';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Auth') private authModel: Model<IAuth>) {}

  async findUser({
    username,
    email,
    password,
  }: {
    username?: string;
    email?: string;
    password: string;
  }): Promise<ReturnDataAuth> {
    const userData = await this.authModel.findOne({ [username ? 'username' : 'email']: username || email }).exec();
    if (!userData || !(await bcrypt.compare(password, userData.password))) return null;
    return userData;
  }
}

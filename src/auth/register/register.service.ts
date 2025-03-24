import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { Auth } from '../auth.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnDataAuth } from 'src/utility/types/auth';

@Injectable()
export class RegisterService {
  constructor(@InjectModel('Auth') private authModel: Model<Auth>) {}

  async createUser({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }): Promise<ReturnDataAuth> {
    const userData = await this.authModel.findOne({ email }).exec();
    if (userData) return null;

    return new this.authModel({ username, email, password: await bcrypt.hash(password, 10) }).save();
  }
}

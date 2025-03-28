import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.schema';
import { ReturnDataAuth } from 'src/utility/types/auth';

@Injectable()
export class GetProfileService {
  constructor(@InjectModel('Auth') private authModel: Model<Auth>) {}

  async getAllProfiles(): Promise<ReturnDataAuth[]> {
    return this.authModel.find().exec();
  }

  async getProfile(id: string): Promise<ReturnDataAuth> {
    return this.authModel
      .findOne({
        $expr: { $regexMatch: { input: { $toString: '$_id' }, regex: id, options: 'i' } },
      })
      .exec();
  }
}

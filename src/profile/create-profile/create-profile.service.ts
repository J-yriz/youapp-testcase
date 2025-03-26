import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.schema';
import { ReturnDataAuth } from 'src/utility/types/auth';
import { ProfileData } from '../profile.schema';

@Injectable()
export class CreateProfileService {
  constructor(@InjectModel('Auth') private authModel: Model<Auth>) {}

  async createProfile(id: string, data: ProfileData): Promise<ReturnDataAuth> {
    const userData = (await this.authModel
      .findOne({
        $expr: { $regexMatch: { input: { $toString: '$_id' }, regex: id, options: 'i' } },
      })
      .exec()) as ReturnDataAuth;
    if (!userData || userData.profile) return null;

    return this.authModel.findByIdAndUpdate(userData._id, { profile: data }, { new: true });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.schema';
import { ReturnDataAuth } from 'src/utility/types/auth';
import { ProfileData } from '../profile.schema';
import { GetProfileService } from '../get-profile/get-profile.service';

@Injectable()
export class CreateProfileService {
  constructor(
    @InjectModel('Auth') private authModel: Model<Auth>,
    private readonly getProfileService: GetProfileService,
  ) {}

  async createProfile(id: string, data: ProfileData): Promise<ReturnDataAuth> {
    const userData = await this.getProfileService.getProfile(id);
    if (!userData || userData.profile) return null;

    return this.authModel.findByIdAndUpdate(userData._id, { profile: data }, { new: true });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.schema';
import { ProfileData } from '../profile.schema';
import { GetProfileService } from '../get-profile/get-profile.service';

@Injectable()
export class UpdateProfileService {
  constructor(
    @InjectModel('Auth') private authModel: Model<Auth>,
    private readonly getProfileService: GetProfileService,
  ) {}

  async updateProfile(id: string, data: ProfileData) {
    const userId = await this.getProfileService.getProfile(id);

    return this.authModel.findByIdAndUpdate(
      { _id: userId?._id },
      {
        $set: {
          profile: {
            about: data.about,
            interest: data.interest,
          },
        },
      },
      { new: true },
    );
  }
}

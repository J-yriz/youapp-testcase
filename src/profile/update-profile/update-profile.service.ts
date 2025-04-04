import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuth } from 'src/auth/auth.schema';
import { IProfileData } from '../profile.schema';
import { GetProfileService } from '../get-profile/get-profile.service';
import { ProfileService } from '../profile.service';
import { ReturnDataAuth } from 'src/utility/types/auth';

@Injectable()
export class UpdateProfileService {
  constructor(
    @InjectModel('Auth') private authModel: Model<IAuth>,
    private readonly getProfileService: GetProfileService,
    private readonly profileService: ProfileService,
  ) {}

  async updateProfile(id: string, data: IProfileData): Promise<ReturnDataAuth> {
    const userId = await this.getProfileService.getProfile(id);
    const zodiacData = data.about?.birthday ? this.profileService.getHoroZod(data.about.birthday) : null;

    const profileUpdate = {
      profile: {
        about: data.about
          ? { ...data.about, horoscope: zodiacData?.horoscope, zodiac: zodiacData?.zodiac }
          : userId?.profile.about,
        interest: data.interest ?? userId?.profile.interest,
      },
    };

    return this.authModel.findByIdAndUpdate({ _id: userId?._id }, { $set: profileUpdate }, { new: true });
  }
}

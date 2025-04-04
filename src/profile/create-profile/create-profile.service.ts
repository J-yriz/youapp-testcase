import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuth } from 'src/auth/auth.schema';
import { ReturnDataAuth } from 'src/utility/types/auth';
import { IProfileData } from '../profile.schema';
import { GetProfileService } from '../get-profile/get-profile.service';
import { ProfileService } from '../profile.service';

@Injectable()
export class CreateProfileService {
  constructor(
    @InjectModel('Auth') private authModel: Model<IAuth>,
    private readonly getProfileService: GetProfileService,
    private readonly profileService: ProfileService,
  ) {}

  async createProfile(id: string, data: IProfileData): Promise<ReturnDataAuth> {
    const userData = await this.getProfileService.getProfile(id);
    if (!userData || userData.profile) return null;

    const zodiacData = data.about?.birthday ? this.profileService.getHoroZod(data.about.birthday) : null;

    return this.authModel.findByIdAndUpdate(
      userData._id,
      {
        profile: {
          about: { ...data.about, horoscope: zodiacData?.horoscope, zodiac: zodiacData?.zodiac },
          interest: data.interest,
        },
      },
      { new: true },
    );
  }
}

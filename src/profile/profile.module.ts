import { Module } from '@nestjs/common';
import { CreateProfileModule } from './create-profile/create-profile.module';
import { GetProfileModule } from './get-profile/get-profile.module';
import { UpdateProfileModule } from './update-profile/update-profile.module';

@Module({
  imports: [CreateProfileModule, GetProfileModule, UpdateProfileModule],
})
export class ProfileModule {}

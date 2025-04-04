import { Module } from '@nestjs/common';
import { CreateProfileModule } from './create-profile/create-profile.module';
import { GetProfileModule } from './get-profile/get-profile.module';
import { UpdateProfileModule } from './update-profile/update-profile.module';
import { ProfileService } from './profile.service';

@Module({
  imports: [CreateProfileModule, GetProfileModule, UpdateProfileModule],
  providers: [ProfileService],
})
export class ProfileModule {}

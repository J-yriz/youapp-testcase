import { Module } from '@nestjs/common';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileController } from './update-profile.controller';

@Module({
  providers: [UpdateProfileService],
  controllers: [UpdateProfileController]
})
export class UpdateProfileModule {}

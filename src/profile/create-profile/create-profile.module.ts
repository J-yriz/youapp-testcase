import { Module } from '@nestjs/common';
import { CreateProfileService } from './create-profile.service';
import { CreateProfileController } from './create-profile.controller';

@Module({
  providers: [CreateProfileService],
  controllers: [CreateProfileController]
})
export class CreateProfileModule {}

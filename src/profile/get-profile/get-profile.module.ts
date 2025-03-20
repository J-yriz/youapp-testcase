import { Module } from '@nestjs/common';
import { GetProfileService } from './get-profile.service';
import { GetProfileController } from './get-profile.controller';

@Module({
  providers: [GetProfileService],
  controllers: [GetProfileController]
})
export class GetProfileModule {}

import { Module } from '@nestjs/common';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileController } from './update-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { GetProfileService } from '../get-profile/get-profile.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthModule }])],
  providers: [UpdateProfileService, GetProfileService],
  controllers: [UpdateProfileController],
})
export class UpdateProfileModule {}

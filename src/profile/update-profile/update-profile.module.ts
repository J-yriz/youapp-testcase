import { Module } from '@nestjs/common';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileController } from './update-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { GetProfileService } from '../get-profile/get-profile.service';
import { ProfileService } from '../profile.service';
import { AppService } from 'src/app.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthModule }])],
  providers: [UpdateProfileService, GetProfileService, ProfileService, AppService],
  controllers: [UpdateProfileController],
})
export class UpdateProfileModule {}

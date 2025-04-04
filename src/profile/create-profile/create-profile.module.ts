import { Module } from '@nestjs/common';
import { CreateProfileService } from './create-profile.service';
import { CreateProfileController } from './create-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { GetProfileService } from '../get-profile/get-profile.service';
import { ProfileService } from '../profile.service';
import { AppService } from 'src/app.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthModule }])],
  providers: [CreateProfileService, GetProfileService, ProfileService, AppService],
  controllers: [CreateProfileController],
})
export class CreateProfileModule {}

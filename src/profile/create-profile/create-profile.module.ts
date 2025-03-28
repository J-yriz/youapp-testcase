import { Module } from '@nestjs/common';
import { CreateProfileService } from './create-profile.service';
import { CreateProfileController } from './create-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { GetProfileService } from '../get-profile/get-profile.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthModule }])],
  providers: [CreateProfileService, GetProfileService],
  controllers: [CreateProfileController],
})
export class CreateProfileModule {}

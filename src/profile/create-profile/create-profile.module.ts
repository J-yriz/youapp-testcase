import { Module } from '@nestjs/common';
import { CreateProfileService } from './create-profile.service';
import { CreateProfileController } from './create-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthModule }])],
  providers: [CreateProfileService],
  controllers: [CreateProfileController],
})
export class CreateProfileModule {}

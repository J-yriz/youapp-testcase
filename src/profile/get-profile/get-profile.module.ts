import { Module } from '@nestjs/common';
import { GetProfileService } from './get-profile.service';
import { GetProfileController } from './get-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthModule }])],
  providers: [GetProfileService],
  controllers: [GetProfileController],
})
export class GetProfileModule {}

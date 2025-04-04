import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from '../auth.schema';
import { AppService } from 'src/app.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }])],
  providers: [RegisterService, AppService],
  controllers: [RegisterController],
})
export class RegisterModule {}

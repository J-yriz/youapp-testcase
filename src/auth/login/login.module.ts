import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from '../auth.schema';
import { AppService } from 'src/app.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }])],
  providers: [LoginService, AppService],
  controllers: [LoginController],
})
export class LoginModule {}

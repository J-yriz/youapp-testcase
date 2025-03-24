import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from '../dto/login';
import { ResponseStructure } from 'src/utility/class/reponseStructure';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async loginUser(@Body() LoginDto: LoginDto) {
    const getedUser = await this.loginService.findUser(LoginDto);
    const response = getedUser
      ? new ResponseStructure({
          statusCode: 200,
          message: 'User logged in successfully',
          data: {},
          error: null,
        })
      : new ResponseStructure({
          statusCode: 400,
          message: 'User not found or password is incorrect',
          data: {},
          error: 'User not found or password is incorrect',
        });

    throw new HttpException(response, response.statusCode);
  }
}

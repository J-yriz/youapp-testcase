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
          data: {
            id: (getedUser._id as string).toString().slice(0, 5),
            username: getedUser.username,
            email: getedUser.email,
          },
          error: null,
        })
      : new ResponseStructure({
          statusCode: 400,
          message: 'Bad request',
          data: {},
          error: 'User not found or password is incorrect',
        });

    throw new HttpException(response, response.statusCode);
  }
}

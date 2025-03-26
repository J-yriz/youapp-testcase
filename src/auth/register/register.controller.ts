import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterDto } from '../dto/register';
import { ResponseStructure } from 'src/utility/class/reponseStructure';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async registerUser(@Body() registerDto: RegisterDto) {
    const createdUser = await this.registerService.createUser(registerDto);

    const response = createdUser
      ? new ResponseStructure({
          statusCode: HttpStatus.CREATED,
          message: 'User created successfully',
          data: {
            id: (createdUser._id as string).toString().slice(0, 5),
            username: createdUser.username,
            email: createdUser.email,
          },
          error: null,
        })
      : new ResponseStructure({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Bad request',
          data: {},
          error: 'User already exists',
        });

    throw new HttpException(response, response.statusCode);
  }
}

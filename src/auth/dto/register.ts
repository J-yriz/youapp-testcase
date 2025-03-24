import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(4, { message: 'Username is too short!' })
  @MaxLength(16, { message: 'Username is too long!' })
  username: string;

  @IsEmail({}, { message: 'Invalid email!' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short!' })
  @MaxLength(16, { message: 'Password is too long!' })
  @IsNotEmpty()
  password: string;
}

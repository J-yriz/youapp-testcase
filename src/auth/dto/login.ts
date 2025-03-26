import { IsEmail, IsString, IsNotEmpty, IsOptional, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsOptional()
  @MinLength(4, { message: 'Username is too short!' })
  @MaxLength(16, { message: 'Username is too long!' })
  username: string;

  @IsOptional()
  @IsEmail({}, { message: 'Invalid email!' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short!' })
  @MaxLength(16, { message: 'Password is too long!' })
  @IsNotEmpty()
  password: string;
}

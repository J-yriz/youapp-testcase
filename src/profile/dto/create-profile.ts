import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Gender, Zodiac } from 'src/utility/types/profile';

class AboutProfile {
  @IsString()
  image: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDateString()
  birthday: Date;

  @IsString()
  horoscope: string;

  @IsEnum(Zodiac)
  zodiac: Zodiac;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;
}

export class CreateProfileDto {
  @IsString({ message: 'id must be a string' })
  @IsNotEmpty({ message: 'id is required' })
  id: string;

  @ValidateNested()
  @Type(() => AboutProfile)
  about: AboutProfile;

  @IsArray()
  @IsString({ each: true })
  interest: string[];
}

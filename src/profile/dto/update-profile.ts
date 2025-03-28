import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Gender, Zodiac } from 'src/utility/types/profile';

class AboutProfile {
  @IsString()
  @IsOptional()
  image?: string;

  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @IsDateString()
  @IsOptional()
  birthday?: Date;

  @IsString()
  @IsOptional()
  horoscope?: string;

  @IsEnum(Zodiac)
  @IsOptional()
  zodiac?: Zodiac;

  @IsNumber()
  @IsOptional()
  height?: number;

  @IsNumber()
  @IsOptional()
  weight?: number;
}

export class UpdateProfileDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => AboutProfile)
  about?: AboutProfile;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  interest?: string[];
}

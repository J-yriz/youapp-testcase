import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Gender } from 'src/utility/types/profile';

class AboutProfile {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsDateString()
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, {
    message: 'birthday must be in format YYYY-MM-DDTHH:mm:ss.sssZ\nExample: 2021-08-01T00:00:00.000Z',
  })
  birthday: string;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;
}

export class CreateProfileDto {
  @IsString({ message: 'id must be a string' })
  @IsNotEmpty({ message: 'id is required' })
  id: string;

  @ValidateNested()
  @Type(() => AboutProfile)
  @IsOptional()
  about: AboutProfile;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  interest: string[];
}

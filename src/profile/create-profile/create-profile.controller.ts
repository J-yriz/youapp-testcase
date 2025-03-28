import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateProfileService } from './create-profile.service';
import { CreateProfileDto } from '../dto/create-profile';
import { ResponseStructure } from 'src/utility/class/reponseStructure';

@Controller('createProfile')
export class CreateProfileController {
  constructor(private readonly createProfileService: CreateProfileService) {}

  @Post()
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    const createdProfile = await this.createProfileService.createProfile(createProfileDto.id, {
      about: createProfileDto.about,
      interest: createProfileDto.interest,
    });

    const response = createdProfile
      ? new ResponseStructure({
          statusCode: HttpStatus.CREATED,
          message: 'Profile created successfully',
          data: {
            id: (createdProfile._id as string).toString().slice(0, 5),
            username: createdProfile.username,
            email: createdProfile.email,
            profile: createdProfile.profile,
          },
          error: null,
        })
      : new ResponseStructure({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Bad request',
          data: {},
          error: 'Invalid user id or profile already exists',
        });

    throw new HttpException(response, response.statusCode);
  }
}

import { Body, Controller, HttpException, HttpStatus, Param, Put } from '@nestjs/common';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileDto } from '../dto/update-profile';
import { ResponseStructure } from 'src/utility/class/reponseStructure';
import { AppService } from 'src/app.service';

@Controller('updateProfile')
export class UpdateProfileController {
  constructor(
    private readonly updateProfileService: UpdateProfileService,
    private readonly appService: AppService,
  ) {}

  @Put('/:id')
  async updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    const updatedProfile = await this.updateProfileService.updateProfile(id, {
      about: updateProfileDto.about,
      interest: updateProfileDto.interest,
    });

    const response = updatedProfile
      ? new ResponseStructure({
          statusCode: HttpStatus.OK,
          message: 'Profile updated successfully',
          data: {
            id: this.appService.sliceWord((updatedProfile._id as string).toString(), 0, 5),
            username: updatedProfile.username,
            email: updatedProfile.email,
            profile: updatedProfile.profile,
          },
          error: null,
        })
      : new ResponseStructure({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Bad request',
          data: {},
          error: 'Invalid user id or profile does not exist',
        });

    throw new HttpException(response, response.statusCode);
  }
}

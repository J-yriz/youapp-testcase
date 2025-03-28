import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileDto } from '../dto/update-profile';

@Controller('updateProfile')
export class UpdateProfileController {
  constructor(private readonly updateProfileService: UpdateProfileService) {}

  @Patch('/:id')
  async updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.updateProfileService.updateProfile(id, {
      about: updateProfileDto.about,
      interest: updateProfileDto.interest,
    });
  }
}

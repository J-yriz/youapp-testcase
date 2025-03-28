import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { GetProfileService } from './get-profile.service';
import { ResponseStructure } from 'src/utility/class/reponseStructure';

@Controller('getProfile')
export class GetProfileController {
  constructor(private readonly getProfileService: GetProfileService) {}

  @Get()
  async getAllProfiles() {
    const userDatas = await this.getProfileService.getAllProfiles();

    throw new HttpException(
      {
        statusCode: HttpStatus.OK,
        message: 'All profiles fetched successfully',
        data: userDatas.map((userData) => ({
          id: (userData?._id as string).toString().slice(0, 5),
          username: userData?.username,
          email: userData?.email,
          detail: `/api/getProfile/${(userData?._id as string).toString().slice(0, 5)}`,
        })),
        error: null,
      },
      HttpStatus.OK,
    );
  }

  @Get('/:id')
  async getProfile(@Param('id') id: string) {
    const userData = await this.getProfileService.getProfile(id);

    const response = userData
      ? new ResponseStructure({
          statusCode: HttpStatus.OK,
          message: 'Profile fetched successfully',
          data: {
            id: (userData._id as string).toString().slice(0, 5),
            username: userData.username,
            email: userData.email,
            profile: userData.profile,
          },
          error: null,
        })
      : new ResponseStructure({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Bad request',
          data: {},
          error: 'Invalid user id',
        });

    throw new HttpException(response, response.statusCode);
  }
}

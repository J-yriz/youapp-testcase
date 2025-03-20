import { Test, TestingModule } from '@nestjs/testing';
import { ViewMessagesController } from './view-messages.controller';

describe('ViewMessagesController', () => {
  let controller: ViewMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewMessagesController],
    }).compile();

    controller = module.get<ViewMessagesController>(ViewMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ViewMessagesService } from './view-messages.service';

describe('ViewMessagesService', () => {
  let service: ViewMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewMessagesService],
    }).compile();

    service = module.get<ViewMessagesService>(ViewMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

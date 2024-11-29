import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users.entity';
import { Repository } from 'typeorm';

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: Partial<Repository<User>>;

  beforeEach(async () => {
    userRepository = {
      findOne: jest.fn().mockResolvedValue({ username: 'test', role: 'Admin' }),
      save: jest.fn().mockResolvedValue({ username: 'test', role: 'Admin' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: userRepository },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should find a user by username', async () => {
    const user = await usersService.findByUsername('test');
    expect(user).toEqual({ username: 'test', role: 'Admin' });
  });

  it('should create a new user', async () => {
    const user = await usersService.createUser(
      'test',
      'hashed_password',
      'Admin',
    );
    expect(user).toEqual({ username: 'test', role: 'Admin' });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: Partial<AuthService>;

  beforeEach(async () => {
    authService = {
      validateUser: jest
        .fn()
        .mockResolvedValue({ username: 'test', role: 'Admin' }),
      login: jest.fn().mockResolvedValue({ access_token: 'token' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should login a valid user', async () => {
    const response = await authController.login({
      username: 'test',
      password: 'hashed_password',
    });
    expect(response).toEqual({ access_token: 'token' });
  });
});

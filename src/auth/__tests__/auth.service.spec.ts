import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: Partial<UsersService>;
  let jwtService: Partial<JwtService>;

  beforeEach(async () => {
    usersService = {
      findByUsername: jest
        .fn()
        .mockResolvedValue({
          username: 'test',
          password: 'hashed_password',
          role: 'Admin',
        }),
    };
    jwtService = {
      sign: jest.fn().mockReturnValue('token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should validate user with correct credentials', async () => {
    const user = await authService.validateUser('test', 'hashed_password');
    expect(user).toEqual({
      username: 'test',
      password: 'hashed_password',
      role: 'Admin',
    });
  });

  it('should return null for invalid credentials', async () => {
    jest.spyOn(usersService, 'findByUsername').mockResolvedValue(null);
    const user = await authService.validateUser('invalid', 'password');
    expect(user).toBeNull();
  });

  it('should generate a JWT token for login', async () => {
    const token = await authService.login({ username: 'test', role: 'Admin' });
    expect(token).toEqual({ access_token: 'token' });
  });
});

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }

  async createUser(
    username: string,
    password: string,
    role: string,
  ): Promise<User> {
    const newUser = this.userRepository.create({ username, password, role });
    return this.userRepository.save(newUser);
  }
}

import { Module } from '@nestjs/common';
import { User, UserSchema } from 'src/models/users.models';
import{MongooseModule} from '@nestjs/mongoose'
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema  }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
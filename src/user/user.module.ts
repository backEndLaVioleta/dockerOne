import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { BookService } from 'src/book/book.service'
import { LoanService } from 'src/loan/loan.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

@Module({
  exports: [UserService],
  imports:[TypeOrmModule.forFeature([User]), BookService, LoanService],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

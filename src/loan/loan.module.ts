import { Module } from '@nestjs/common'
import { LoanService } from './loan.service'
import { LoanController } from './loan.controller'
import { BookModule } from 'src/book/book.module'
import { UserModule } from 'src/user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Book } from 'src/book/entities/book.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Book]),BookModule, UserModule],
  exports: [LoanService],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}

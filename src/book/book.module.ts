import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoanService } from 'src/loan/loan.service'
import { UserService } from 'src/user/user.service'
import { BookController } from './book.controller'
import { BookService } from './book.service'
import { Book } from './entities/book.entity'

@Module({
    imports:[TypeOrmModule.forFeature([Book]), 
             UserService, 
             LoanService],
    controllers:[BookController],
    providers:[BookService],
    exports:[BookService]

})
export class BookModule {}

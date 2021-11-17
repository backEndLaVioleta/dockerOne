import { Injectable } from '@nestjs/common'
import { BookService } from '../book/book.service'
import { UserService } from '../user/user.service'
import { getConnection, Repository } from 'typeorm'

import { Loan } from './entities/loan.entity'
import { InjectRepository } from '@nestjs/typeorm'
// import { CreateLoanDto } from './dto/create-loan.dto';
// import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoanService {
  constructor(
    private bookService: BookService,
    private userService: UserService,
    @InjectRepository(Loan) private loanRepository: Repository <Loan>){}

  async create(loanDTO): Promise<Loan> {
    const loan = new Loan()
    const book = await this.bookService.findBook(loanDTO.bookId)
    let newLoan: Loan
    
    Object.assign(loan,loanDTO)

    try {
      await getConnection().transaction(async manager =>{
        if(book.available == false){

          throw new Error('Book already booked')

        } else{
          book.available = false
          newLoan = await manager.save(loan)
          await manager.save(book)
        }
        })

      return newLoan
    } catch (error) {
      throw error
    }


    // return `This action adds a new loan ${loanDTO}`
  }

  async findOneLoan(loanId: Loan): Promise<Loan>{
    return this.loanRepository.findOne(loanId)
  }

  async returnBook(loanEntity): Promise<Loan>{
// user has the book
// relation one to one in loan.entity
return loanEntity
    
  }

  // findAll() {
  //   return `This action returns all loan`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} loan`;
  // }

  // update(id: number, updateLoanDto: UpdateLoanDto) {
  //   return `This action updates a #${id} loan`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} loan`;
  // }
}

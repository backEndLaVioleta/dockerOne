import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common'
import { LoanService } from './loan.service'
import { CreateLoanDto } from './dto/create-loan.dto'
import { Loan } from './entities/loan.entity'
// import { UpdateLoanDto } from './dto/update-loan.dto'

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  async create(@Body() createLoanDto: CreateLoanDto) {
   // return this.loanService.create(createLoanDto)
   try {
     return await this.loanService.create(createLoanDto)
   } catch (error) {
     throw new HttpException({
       status: HttpStatus.FORBIDDEN,
       error: error.message
     }, HttpStatus.FORBIDDEN)
     
   }
  }

  @Get(':loanId')
  async getLoan(@Param('loanId') loanId: Loan): Promise<Loan>{
    return this.loanService.findOneLoan(loanId)
  }
}

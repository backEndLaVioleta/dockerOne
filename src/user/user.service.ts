import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}
 async createUser(newUser: CreateUserDto): Promise<User> {
   const user: User = new User()
   user.email = newUser.email
   user.password = newUser.email
   user.photo = newUser.photo
    return await this.userRepository.save(user)
  }

  //async findAll({order=1, limit=0}): Promise<User[]> {
  // const sort = order? 'ASC' : 'DESC'
  // return await this.userRepository.find({order:{title: sort}, take:limit})
  //

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}

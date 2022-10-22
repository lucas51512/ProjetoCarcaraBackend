import { Injectable } from '@nestjs/common';
import { CreatePessoaSkillDto } from './dto/create-pessoa-skill.dto';
import { UpdatePessoaSkillDto } from './dto/update-pessoa-skill.dto';

@Injectable()
export class PessoaSkillService {
  create(createPessoaSkillDto: CreatePessoaSkillDto) {
    return 'This action adds a new pessoaSkill';
  }

  findAll() {
    return `This action returns all pessoaSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoaSkill`;
  }

  update(id: number, updatePessoaSkillDto: UpdatePessoaSkillDto) {
    return `This action updates a #${id} pessoaSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoaSkill`;
  }
}

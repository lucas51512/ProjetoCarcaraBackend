import { Module } from '@nestjs/common';
import { PessoaSkillService } from './pessoa-skill.service';
import { PessoaSkillController } from './pessoa-skill.controller';

@Module({
  controllers: [PessoaSkillController],
  providers: [PessoaSkillService]
})
export class PessoaSkillModule {}

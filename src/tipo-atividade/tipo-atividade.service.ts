import { Injectable } from '@nestjs/common';
import { CreateTipoAtividadeDto } from './dto/create-tipo-atividade.dto';
import { UpdateTipoAtividadeDto } from './dto/update-tipo-atividade.dto';

@Injectable()
export class TipoAtividadeService {
  create(createTipoAtividadeDto: CreateTipoAtividadeDto) {
    return 'This action adds a new tipoAtividade';
  }

  findAll() {
    return `This action returns all tipoAtividade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoAtividade`;
  }

  update(id: number, updateTipoAtividadeDto: UpdateTipoAtividadeDto) {
    return `This action updates a #${id} tipoAtividade`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoAtividade`;
  }
}

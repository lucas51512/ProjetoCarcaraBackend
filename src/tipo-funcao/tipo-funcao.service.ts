import { Injectable } from '@nestjs/common';
import { CreateTipoFuncaoDto } from './dto/create-tipo-funcao.dto';
import { UpdateTipoFuncaoDto } from './dto/update-tipo-funcao.dto';

@Injectable()
export class TipoFuncaoService {
  create(createTipoFuncaoDto: CreateTipoFuncaoDto) {
    return 'This action adds a new tipoFuncao';
  }

  findAll() {
    return `This action returns all tipoFuncao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoFuncao`;
  }

  update(id: number, updateTipoFuncaoDto: UpdateTipoFuncaoDto) {
    return `This action updates a #${id} tipoFuncao`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoFuncao`;
  }
}

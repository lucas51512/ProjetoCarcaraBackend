import { Module } from '@nestjs/common';
import { TipoAtividadeService } from './tipo-atividade.service';
import { TipoAtividadeController } from './tipo-atividade.controller';

@Module({
  controllers: [TipoAtividadeController],
  providers: [TipoAtividadeService]
})
export class TipoAtividadeModule {}

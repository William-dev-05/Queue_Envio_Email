import { FilaProcessor } from './fila.processor';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { FilaController } from './fila.controller';
import { FilaService } from './fila.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  controllers: [FilaController],
  providers: [FilaProcessor, FilaService],
})
export class FilaModule {}

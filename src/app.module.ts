import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { FilaModule } from './modules/fila/fila.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    FilaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

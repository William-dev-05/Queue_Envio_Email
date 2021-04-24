import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import Mail from '../../lib/Mail';

@Processor('email')
export class FilaProcessor {
  private readonly logger = new Logger(FilaProcessor.name);

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com>',
      to: `${job.data.name} <${job.data.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${job.data.name}, bem-vindo ao sistema de filas.`,
    });
    this.logger.debug('Transcoding completed');
  }
}

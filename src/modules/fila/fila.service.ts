import { InjectQueue } from '@nestjs/bull';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Queue } from 'bull';

interface IMail {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class FilaService {
  constructor(@InjectQueue('email') private readonly emailQueue: Queue) {}

  async transcode(user: IMail) {
    try {
      await this.emailQueue.add('transcode', user);

      return new HttpException(
        { message: `Um email de confirmação foi enviado para ${user.email}` },
        HttpStatus.CREATED,
      );
    } catch (error) {
      return new HttpException(error.stack, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { FilaService } from './fila.service';

interface IMail {
  name: string;
  email: string;
  password: string;
}

@Controller('fila')
export class FilaController {
  constructor(private readonly filaService: FilaService) {}

  @Post('transcode')
  async transcode(@Body() user: IMail) {
    throw await this.filaService.transcode(user);
  }
}

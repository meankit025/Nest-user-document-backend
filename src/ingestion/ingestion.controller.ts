import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { IngestionService } from './ingestion.service';

@Controller('ingestion')
export class IngestionController {
  constructor(private readonly ingestionService: IngestionService) {}

  @Post('trigger')
  async triggerIngestion(@Body() body: any) {
    return this.ingestionService.triggerIngestion(body);
  }

  @Get('status/:processId')
  async getIngestionStatus(@Param('processId') processId: string) {
    return this.ingestionService.getIngestionStatus(processId);
  }
}

import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('documents')
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('create')
  async create(@Body() body: any) {
    const { title, content, uploadedBy } = body;
    return this.documentsService.createDocument(title, content, uploadedBy);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './documents.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}

  async createDocument(
    title: string,
    content: string,
    uploadedBy: string,
  ): Promise<Document> {
    const doc = this.documentRepository.create({ title, content, uploadedBy });
    return this.documentRepository.save(doc);
  }
}

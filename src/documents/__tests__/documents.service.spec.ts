import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsService } from '../documents.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Document } from '../documents.entity';
import { Repository } from 'typeorm';

describe('DocumentsService', () => {
  let documentsService: DocumentsService;
  let documentRepository: Partial<Repository<Document>>;

  beforeEach(async () => {
    documentRepository = {
      save: jest
        .fn()
        .mockResolvedValue({
          id: 1,
          title: 'Test',
          content: 'Content',
          uploadedBy: 'Admin',
        }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DocumentsService,
        { provide: getRepositoryToken(Document), useValue: documentRepository },
      ],
    }).compile();

    documentsService = module.get<DocumentsService>(DocumentsService);
  });

  it('should create a document', async () => {
    const document = await documentsService.createDocument(
      'Test',
      'Content',
      'Admin',
    );
    expect(document).toEqual({
      id: 1,
      title: 'Test',
      content: 'Content',
      uploadedBy: 'Admin',
    });
  });
});

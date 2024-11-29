import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class IngestionService {
  constructor(private readonly httpService: HttpService) {}

  async triggerIngestion(data: any): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.post(
          'http://python-backend-url/ingestion-trigger',
          data,
        ),
      );
      return response;
    } catch (error) {
      throw new HttpException(
        'Failed to trigger ingestion',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async getIngestionStatus(processId: string): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(
          `http://python-backend-url/ingestion-status/${processId}`,
        ),
      );
      return response;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch ingestion status',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}

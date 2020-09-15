import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import {
  GetStudentGroupInformationInputDto, GetStudentGroupInformationDto,
  CreateOrUpdateStudentGroupInformationDto, GetStudentGroupInformationForEditDto
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class StudentGroupInformationService {

  apiName = "Default";

  constructor(private readonly restService: RestService) {

  }

  getById(id: string): Observable<GetStudentGroupInformationForEditDto> {
    return this.restService.request({ url: `/api/projectmanagement/studentGroupInformation/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

  delete(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/studentGroupInformation/${id}`, method: 'DELETE' },
      { apiName: this.apiName });
  }

  saveByInput(body: CreateOrUpdateStudentGroupInformationDto): Observable<string> {
    return this.restService.request({ url: '/api/projectmanagement/studentGroupInformation/save', body, method: 'POST' },
      { apiName: this.apiName });
  }

  getListByPaged(params = {} as GetStudentGroupInformationInputDto): Observable<PagedResultDto<GetStudentGroupInformationDto>> {
    return this.restService.request({ url: '/api/projectmanagement/studentGroupInformation/paged', params, method: 'GET' },
      { apiName: this.apiName });
  }

  getAll(): Observable<GetStudentGroupInformationDto[]> {
    return this.restService.request({ url: '/api/projectmanagement/studentGroupInformation', method: 'GET' },
      { apiName: this.apiName });
  }
}

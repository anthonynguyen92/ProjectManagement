import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { GetTeacherForEditDto, CreateOrEditTeacherDto, GetTeacherInputDto, GetTeacherDto } from '../models';

@Injectable({ providedIn: 'root' })
export class TeacherService {

  apiName: "Default";

  constructor(private restService: RestService) {

  }

  getById(id: string): Observable<GetTeacherForEditDto> {
    return this.restService.request({ url: `/api/projectmanagement/teacher/${id}`, method: 'GET' }, { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/teacher/${id}`, method: 'DELETE' }, { apiName: this.apiName });
  }

  saveByInput(body: CreateOrEditTeacherDto): Observable<string> {
    return this.restService.request({ url: '/api/projectmanagement/teacher/save', body, method: 'POST' }, { apiName: this.apiName });
  }

  getListPagedByInput(params = {} as GetTeacherInputDto): Observable<PagedResultDto<GetTeacherDto>> {
    return this.restService.request({ url: '/api/projectmanagement/teacher/paged', params, method: 'GET' }, { apiName: this.apiName });
  }

  getAll(): Observable<GetTeacherDto[]> {
    return this.restService.request({ url: '/api/projectmanagement/teacher', method: 'GET' }, { apiName: this.apiName });
  }

}

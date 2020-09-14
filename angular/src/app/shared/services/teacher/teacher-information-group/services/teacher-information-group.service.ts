import { Injectable } from "@angular/core";
import { RestService, PagedResultDto } from '@abp/ng.core';
import { CreateUpdateTeacherInformationGroupDto, GetTeacherInformationGroupDto, GetTeacherInformationGroupForEditDto, GetTeacherInformationGroupForInputDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherInformationGroupService {

  apiName = "Default";

  constructor(private readonly restService: RestService) { }

  getById(id: string): Observable<GetTeacherInformationGroupForEditDto> {
    return this.restService.request({ url: `/api/projectmanagement/teacherInformationGroup/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

  getListByPaged(params: GetTeacherInformationGroupForInputDto): Observable<PagedResultDto<GetTeacherInformationGroupDto>> {
    return this.restService.request({ url: '/api/projectmanagement/teacherInformationGroup/paged', params, method: 'GET' },
      { apiName: this.apiName });
  }

  getAll(): Observable<GetTeacherInformationGroupDto> {
    return this.restService.request({ url: '/api/projectmanagement/teacherInformationGroup', method: 'GET' },
      { apiName: this.apiName });
  }

  saveByInput(body: CreateUpdateTeacherInformationGroupDto): Observable<string> {
    return this.restService.request({ url: `/api/projectmanagement/teacherInformationGroup/save`, body, method: 'POST' },
      { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/teacherInformationGroup/${id}`, method: 'DELETE' },
      { apiName: this.apiName });
  }

}

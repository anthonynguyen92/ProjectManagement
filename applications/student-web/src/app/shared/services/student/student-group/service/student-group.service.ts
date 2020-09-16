import { RestService, PagedResultDto } from '@abp/ng.core';
import { Injectable } from "@angular/core";
import { CreateOrEditStudentGroupDto, GetStudentGroupForEditDto, GetStudentGroupDto, GetStudentGroupForInputDto } from '../models';
import { Observable } from 'rxjs';
import { GetStudentGroupForUx } from '../models/student-group-for-ux';

@Injectable({
  providedIn: 'root'
})
export class StudentGroupService {

  apiName: string = 'Default';

  constructor(private readonly restService: RestService) { }

  getById(id: string): Observable<GetStudentGroupForEditDto> {
    return this.restService.request({ url: `/api/projectmanagement/studentGroup/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

  saveByInput(body: CreateOrEditStudentGroupDto): Observable<string> {
    return this.restService.request({ url: '/api/projectmanagement/studentGroup/save', body, method: 'POST' },
      { apiName: this.apiName });
  }

  getAll(): Observable<GetStudentGroupDto[]> {
    return this.restService.request({ url: '/api/projectmanagement/studentGroup', method: 'GET' },
      { apiName: this.apiName });
  }

  getAllByList(params = {} as GetStudentGroupForInputDto): Observable<PagedResultDto<GetStudentGroupDto>> {
    return this.restService.request({ url: '/api/projectmanagement/studentGroup/paged', params, method: 'GET' },
      { apiName: this.apiName });
  }

  deleteById(id: string): Observable<string> {
    return this.restService.request({ url: `/api/projectmanagement/studentGroup/${id}`, method: 'DELETE' },
      { apiName: this.apiName });
  }

  getListGroupOfStudentnotRegister(): Observable<GetStudentGroupDto[]> {
    return this.restService.request({ url: '/api/projectmanagement/studentGroup/byStudentInGroupForProject', method: 'GET' },
      { apiName: this.apiName });
  }

  getGroupOfStudent(params = {} as GetStudentGroupForUx): Observable<PagedResultDto<GetStudentGroupDto>> {
    return this.restService.request({ url: `/api/projectmanagement/studentGroup/studentForUI`, params, method: 'GET' },
      { apiName: this.apiName });
  }
}

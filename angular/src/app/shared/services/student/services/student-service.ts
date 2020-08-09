import { GetStudentDto } from './../models/get-student-dto';
import { GetStudentInputDto } from './../models/get-student-input-dto';
import { CreateUpdateStudentDto } from './../models/create-update-student-dto';
import { GetStudentForEditDto } from './../models/get-student-for-edit-dto';
import { Observable } from 'rxjs';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StudentService {
    apiName = 'Default';

    constructor(private restService: RestService) {

    }

    getById(id: string): Observable<GetStudentForEditDto> {
        return this.restService.request({ url: `/api/projectmanagement/student/${id}`, method: 'GET' }, { apiName: this.apiName });
    }

    deleteById(id: string): Observable<void> {
        return this.restService.request({ url: `/api/projectmanagement/student/${id}`, method: 'DELETE' }, { apiName: this.apiName });
    }

    saveByInput(body: CreateUpdateStudentDto): Observable<string> {
        return this.restService.request({ url: '/api/projectmanagement/student/save', body, method: 'POST' }, { apiName: this.apiName });
    }

    getListPagedByInput(params = {} as GetStudentInputDto): Observable<PagedResultDto<GetStudentDto>> {
        return this.restService.request({ url: '/api/projectmanagement/student/paged', params, method: 'GET' }, { apiName: this.apiName });
    }

    getAll(): Observable<GetStudentDto[]> {
        return this.restService.request({ url: '/api/projectmanagement/student', method: 'GET' }, { apiName: this.apiName });
    }

}

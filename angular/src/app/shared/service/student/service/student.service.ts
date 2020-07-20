import { Injectable } from '@angular/core'
import { RestService } from '@abp/ng.core'
import { CreateUpdateStudentDto } from '../modules/create-update-student-dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {

    apiName: 'Default';
    constructor(private restService: RestService) { }

    create(body: CreateUpdateStudentDto): Observable<CreateUpdateStudentDto> {
        return this.restService.request({ url: 'api/services/Student/Create', method: 'POST', body }, { apiName: this.apiName });
    }

}
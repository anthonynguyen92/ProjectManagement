import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({ providedIn: 'root' })
export class StudentService {

    apiName: 'Default';
    constructor(private restService: RestService) {

    }

    
}
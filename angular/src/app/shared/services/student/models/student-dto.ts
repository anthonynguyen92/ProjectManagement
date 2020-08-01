import { EntityDto } from '@abp/ng.core';

export class StudentDto extends EntityDto<string>{

    name: string;
    birthday: Date;
    phoneNumber: number;
    address: string;
    faculty: string;
    branch: string;
    courseYear: string;
    studentCourse: string;

    constructor(initial: Partial<StudentDto> = {}) {
        super(initial);
    }
}
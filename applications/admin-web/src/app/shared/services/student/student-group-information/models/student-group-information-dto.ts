import { EntityDto } from '@abp/ng.core';

export class StudentGroupInformationDto extends EntityDto<string>{

  studentId: string;
  studentGroupId: string;
  studentName: string;
  position: string;
  roles: string;
  description: string;

  constructor(initial: Partial<StudentGroupInformationDto> = {}) {
    super(initial);
  }

}

import { EntityDto } from '@abp/ng.core';

export class CreateOrUpdateStudentGroupInformationDto extends EntityDto<string>{

  studentId: string;
  studentGroupId: string;
  studentName: string;
  position: string;
  roles: string;
  description: string;

  constructor(initial: Partial<CreateOrUpdateStudentGroupInformationDto> = {}) {
    super(initial);
  }
}

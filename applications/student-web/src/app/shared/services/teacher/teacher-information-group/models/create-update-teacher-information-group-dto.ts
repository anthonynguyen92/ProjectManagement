import { EntityDto } from '@abp/ng.core';

export class CreateUpdateTeacherInformationGroupDto extends EntityDto<string>{
  teacherId: string;
  teacherName: string;
  roles: string;
  description: string;
  projectInformationId:string;

  constructor(initial: Partial<CreateUpdateTeacherInformationGroupDto> = {}) {
    super(initial)
  }
}

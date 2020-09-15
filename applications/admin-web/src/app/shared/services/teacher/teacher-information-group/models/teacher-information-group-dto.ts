import { EntityDto } from '@abp/ng.core';

export class TeacherInformationGroupDto extends EntityDto<string>{
  teacherId: string;
  teacherName: string;
  roles: string;
  description: string;
  projectInformationId:string;

  constructor(initial:Partial<TeacherInformationGroupDto> = {}){
    super(initial)
  }
}

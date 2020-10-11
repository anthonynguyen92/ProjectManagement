import { EntityDto } from '@abp/ng.core';
import { TaskType } from './task-type';

export class CreateUpdateProjectTaskDto extends EntityDto<string>{

  projectInformationId: string;
  name: string;
  descriptions: string;
  type: TaskType;
  teacherName: string;
  bonus: string;

  constructor(initial: Partial<CreateUpdateProjectTaskDto> = {}) {
    super(initial);
  }
}

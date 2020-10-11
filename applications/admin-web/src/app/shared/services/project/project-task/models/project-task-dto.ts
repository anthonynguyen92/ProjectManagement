import { EntityDto } from '@abp/ng.core';
import { TaskType } from './task-type';

export class ProjectTaskDto extends EntityDto<string>{
  projectInformationId: string;
  name: string;
  descriptions: string;
  type: TaskType;
  teacherName: string;
  bonus: string;

  constructor(initial: Partial<ProjectTaskDto> = {}) {
    super(initial);
  }
}

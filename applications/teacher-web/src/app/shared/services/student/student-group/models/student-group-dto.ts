import { EntityDto } from '@abp/ng.core';

export class StudentGroupDto extends EntityDto<string>{
  groupName: string;
  numberOfMenber: number;

  constructor(initial: Partial<StudentGroupDto> = {}) {
    super(initial);
  }
}

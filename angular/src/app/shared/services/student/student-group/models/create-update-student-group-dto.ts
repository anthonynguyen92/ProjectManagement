import { EntityDto } from '@abp/ng.core';

export class CreateOrEditStudentGroupDto extends EntityDto<string>{
  groupName: string;
  numberOfMenber: number;

  constructor(initial: Partial<CreateOrEditStudentGroupDto> = {}) {
    super(initial);
  }
}

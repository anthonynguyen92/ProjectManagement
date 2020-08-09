import { EntityDto } from '@abp/ng.core';

export class CreateOrEditTeacherDto extends EntityDto<string>{

  name: string;
  birthday: Date;
  phoneNumber: string;
  email: string;
  address: string;
  degree: string;
  faculty: string;
  position: string;

  constructor(initial: Partial<CreateOrEditTeacherDto> = {}) {
    super(initial);
  }
}

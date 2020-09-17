import { EntityDto } from '@abp/ng.core';

export class CreateUpdateStudentDto extends EntityDto<string>{

  name: string;
  birthday: Date;
  email: string;
  phoneNumber: number;
  address: string;
  faculty: string;
  branch: string;
  courseYear: string;
  studentCode: string;

  constructor(initial: Partial<CreateUpdateStudentDto> = {}) {
    super(initial);
  }
}

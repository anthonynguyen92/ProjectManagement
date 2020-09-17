import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetStudentGroupForUx extends PagedAndSortedResultRequestDto {

  filter: string;
  studentId: string;

  constructor(initial: Partial<GetStudentGroupForUx> = {}) {
    super(initial);
  }
}

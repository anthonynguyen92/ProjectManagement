import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetStudentGroupForInputDto extends PagedAndSortedResultRequestDto {

  filter: string;
  studentGroupId: string;

  constructor(initial: Partial<GetStudentGroupForInputDto> = {}) {
    super(initial);
  }
}

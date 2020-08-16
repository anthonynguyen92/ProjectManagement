import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetStudentGroupForInputDto extends PagedAndSortedResultRequestDto {

  filter: string;

  constructor(initial: Partial<GetStudentGroupForInputDto> = {}) {
    super(initial);
  }
}

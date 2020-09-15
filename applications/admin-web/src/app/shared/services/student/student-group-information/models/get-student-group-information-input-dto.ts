import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetStudentGroupInformationInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  studentGroupId: string;
  constructor(initial: Partial<GetStudentGroupInformationInputDto> = {}) {
    super(initial);
  }
}

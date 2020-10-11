import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetProjectTaskForInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  projectInformationId: string;

  constructor(initial: Partial<GetProjectTaskForInputDto> = {}) {
    super(initial);
  }
}

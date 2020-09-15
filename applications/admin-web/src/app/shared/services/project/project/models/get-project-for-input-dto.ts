import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
export class GetProjectForInputDto extends PagedAndSortedResultRequestDto {

  filter: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initial: Partial<GetProjectForInputDto> = {}) {
    super(initial);
  }
}

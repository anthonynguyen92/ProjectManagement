import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetTeacherInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  createAt?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initial: Partial<GetTeacherInputDto> = {}) {
    super(initial)
  }
}

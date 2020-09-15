import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetSystemSettingInput extends PagedAndSortedResultRequestDto {
  filter: string;
  createAt?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initialValues: Partial<GetSystemSettingInput> = {}) {
    super(initialValues);
  }
}
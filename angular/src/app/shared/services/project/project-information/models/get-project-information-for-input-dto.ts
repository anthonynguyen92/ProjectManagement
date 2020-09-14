import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetProjectInformationForinputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  projectId: string;

  constructor(initial: Partial<GetProjectInformationForinputDto> = {}) {
    super(initial);
  }
}

import { PagedAndSortedResultRequestDto } from "@abp/ng.core";

export class GetTeacherInformationGroupForInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  projectInformationId: string;

  constructor(initial: Partial<GetTeacherInformationGroupForInputDto> = {}) {
    super(initial);
  }
}

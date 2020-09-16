import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
export class GetStudentInputDto extends PagedAndSortedResultRequestDto {
    filter: string;
    createAt?: string;
    sorting: string;
    skipCount: number;
    maxResultCount: number;

    constructor(initial: Partial<GetStudentInputDto> = {}) {
        super(initial);
    }
}
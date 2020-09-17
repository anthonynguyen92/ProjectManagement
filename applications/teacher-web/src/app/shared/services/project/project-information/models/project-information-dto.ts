import { EntityDto } from '@abp/ng.core';
import { Status } from './status';

export class ProjectInformationDto extends EntityDto<string>{

  projectId: string;
  projectName: string;
  studentGroupId: string;
  studentGroupName: string;
  startDate: Date;
  expiredDate: Date;
  emailContact: string;
  mark: number;
  source: string;
  status: Status;

  constructor(initial: Partial<ProjectInformationDto> = {}) {
    super(initial);
  }
}

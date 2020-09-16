import { EntityDto } from '@abp/ng.core';
import { Status } from '../../../system-configuration/system-setting/models';
import { Level } from './level';
import { ProjectType } from './project-type';

export class CreateOrUpdateProjectDto extends EntityDto<string>{

  projectName: string;
  type: ProjectType;
  status: Status;
  description: string;
  level: Level;
  numberOfTeamRegister: number;
  limitSubscriptions: number;

  constructor(initial: Partial<CreateOrUpdateProjectDto> = {}) {
    super(initial);
  }
}

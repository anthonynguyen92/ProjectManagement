import { ProjectDto } from './project-dto';

export class GetProjectDto extends ProjectDto {

  constructor(initial: Partial<GetProjectDto> = {}) {
    super(initial);
  }
}

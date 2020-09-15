import { ProjectInformationDto } from './project-information-dto';

export class GetProjectInformationDto extends ProjectInformationDto {
  constructor(initial: Partial<GetProjectInformationDto> = {}) {
    super(initial);
  }
}

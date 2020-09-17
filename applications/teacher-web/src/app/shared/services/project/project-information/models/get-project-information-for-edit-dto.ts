import { CreateUpdateProjectInformationDto } from './create-update-project-information-dto';

export class GetProjectInformationForEditDto extends CreateUpdateProjectInformationDto {

  constructor(initial: Partial<CreateUpdateProjectInformationDto> = {}) {
    super(initial);
  }
}
